const axios = require('axios').default;
const { Breed, Temperament } = require('../db');

const myApiKey = 'live_EUTCuqcXxPRCNWyJrkxGqgVplTPZHAmVS7I9C3UxDicEui6Kv8waoqjacz2jrJGO';

const getAllBreeds = async (req, res, next) => {
  try {
    const { name } = req.query;
    if (name) {
      getBreedByName(req, res, next);
      return;
    }
    const dbTemperaments = await Temperament.findAll({});
    const dbBreeds = await Breed.findAll({
      include: {
        model: Temperament,
        attributes: ['name', 'id'],
        through: {
          attributes: [],
        },
      },
    });

    let allBreeds = dbBreeds.map((item) => {
      return {
        id: item.id,
        name: item.name,
        temperaments: item.temperaments,
        weightImperial: item.weightImperial,
        weightMetric: item.weightMetric,
        heightImperial: item.heightImperial,
        heightMetric: item.heightMetric,
        lifeExpectancy: item.life_span,
        origin: item.origin,
      };
    });
    let temperament = [];
    const resp = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${myApiKey}`);
    let breedApi = resp.data.map((item) => {
      let words = item.temperament?.split(', ');
      if (dbTemperaments.length === 0) {
        words?.map((item) => !temperament.includes(item) && temperament.push(item));
      }

      return {
        id: item.id,
        name: item.name,
        temperaments: words,
        weightImperial: item.weight.imperial,
        weightMetric: item.weight.metric,
        heightImperial: item.height.imperial,
        heightMetric: item.height.metric,
        lifeExpectancy: item.life_span,
        origin: item.origin,
        image: item.image.url,
      };
    });
    if (dbTemperaments.length === 0) {
      temperament.map((item) => Temperament.create({ name: item }));
    }
    res.json([...allBreeds, ...breedApi]);
  } catch (error) {
    next(error);
  }
};

const getBreed = async (req, res, next) => {
  try {
    let { id } = req.params;
    let breed;
    if (Number(id)) {
      const resp = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${myApiKey}`);
      let breedFinded = resp.data.find((dog) => dog.id == id);
      breed = {
        id,
        name: breedFinded.name,
        temperament: breedFinded.temperament,
        weightImperial: breedFinded.weight.imperial,
        weightMetric: breedFinded.weight.metric,
        heightImperial: breedFinded.height.imperial,
        heightMetric: breedFinded.height.metric,
        lifeExpectancy: breedFinded.life_span,
        origin: breedFinded.origin,
        image: breedFinded.image.url,
      };
    } else {
      breed = await Breed.findOne({
        include: {
          model: Temperament,
          attributes: ['name', 'id'],
          through: {
            attributes: [],
          },
        },
        where: {
          id,
        },
      });
    }
    res.json(breed);
  } catch (error) {
    next(error);
  }
};

async function getBreedByName(req, res, next) {
  try {
    const { name } = req.query;
    let breed;
    breed = await Breed.findOne({ where: { name }, include: Temperament });
    if (!breed) {
      const resp = await axios.get(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${myApiKey}`
      );
      breed = {
        name: resp.data[0]?.name,
        temperament: resp?.data[0]?.temperament?.split(', '),
        weightImperial: resp.data[0]?.weight?.imperial,
        weightMetric: resp.data[0]?.weight?.metric,
        heightImperial: resp.data[0]?.height?.imperial,
        heightMetric: resp.data[0]?.height?.metric,
        lifeExpectancy: resp.data[0]?.life_span,
        origin: resp.data[0]?.origin,
        image: resp.data[0]?.image?.url,
      };
    }
    res.json(breed);
  } catch (error) {
    const errorWithMessage = new Error('no breed found with that name');
    next(errorWithMessage, error);
  }
}

const createBreed = async (req, res, next) => {
  try {
    const {
      name,
      temperament,
      weightImperial,
      weightMetric,
      heightImperial,
      heightMetric,
      lifeExpectancy,
      origin,
    } = req.body;
    if (name && origin) {
      const newBreed = await Breed.create({
        name,
        weightImperial,
        weightMetric,
        heightImperial,
        heightMetric,
        lifeExpectancy,
        origin,
      });
      for (let i = 0; i < temperament.length; i++) {
        let dbTemperaments = await Temperament.findByPk(temperament[i]);
        newBreed.addTemperament([dbTemperaments]);
      }
      res.json(newBreed.toJSON());
    } else {
      res.status(500).end('no existe el nombre y el origen');
    }
  } catch (error) {
    next(error);
  }
};

const getTemperaments = async (req, res, next) => {
  try {
    res.json(await Temperament.findAll());
  } catch (error) {
    next(error);
  }
};

const getTemperamentById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let oneTemperament = await Temperament.findByPk(id);
    res.json(oneTemperament);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBreeds,
  getBreed,
  createBreed,
  getTemperaments,
  getTemperamentById,
};
