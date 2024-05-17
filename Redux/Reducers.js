import { combineReducers } from 'redux';
import { ADD_SURVEY, CREATE_DRAFT } from './Actions'; // replace with the actual path to your actions


const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SURVEY:
      return [...state, action.payload];
    default:
      return state;
  }
};

const initialState = [];

const draftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DRAFT:
      if (state.find(draft => draft.name === action.payload.name)) {
        return state;
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  surveys: surveysReducer,
  drafts: draftsReducer,
});

export default rootReducer;