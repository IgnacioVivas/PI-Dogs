import { ALL_DOGS, ALL_TEMPERAMENTS, SORT_DATA } from './actions';

let initialState = { allDogs: [], allDogsBackUp: [], allTemperaments: [] };
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        allDogsBackUp: action.payload,
      };
    case ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
      };
    case SORT_DATA:
      return { ...state, allDogs: action.payload };
    default:
      return state;
  }
};
