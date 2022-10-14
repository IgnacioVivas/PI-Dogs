export const ALL_DOGS = 'ALL_DOGS';
export const SORT_DATA = 'SORT_DATA';
export const ALL_TEMPERAMENTS = 'ALL_TEMPERAMENTS';

export const getAllDogs = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`http://localhost:3001/breeds`);
      const data = await resp.json();
      dispatch({ type: ALL_DOGS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllTemperaments = () => {
  return async (dispatch) => {
    const resp = await fetch(`http://localhost:3001/temperaments`);
    const data = await resp.json();
    dispatch({ type: ALL_TEMPERAMENTS, payload: data });
  };
};

export const sortData = (breeds) => {
  return { type: SORT_DATA, payload: breeds };
};
