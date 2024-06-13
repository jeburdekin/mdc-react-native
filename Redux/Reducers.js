import { combineReducers } from 'redux';
import { ADD_SURVEY, CREATE_DRAFT } from './Actions'; // replace with the actual path to your actions
import { DELETE_DRAFT } from './Actions';
import { SET_QUESTIONS, SET_RESPONSES } from './Actions';

const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SURVEY:
      return [...state, action.payload];
    default:
      return state;
  }
};

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
};

const responsesReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RESPONSES:
      return action.payload;
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
      case DELETE_DRAFT:
        return state.filter(draft => draft.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  surveys: surveysReducer,
  drafts: draftsReducer,
  questions: questionsReducer,
  responses: responsesReducer,
});

export default rootReducer;
