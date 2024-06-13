export const ADD_SURVEY = 'ADD_SURVEY';
export const CREATE_DRAFT = 'CREATE_DRAFT';
export const DELETE_DRAFT = 'DELETE_DRAFT';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_RESPONSES = 'SET_RESPONSES';

export const addSurvey = survey => ({
    type: 'ADD_SURVEY',
    payload: survey,
  });


export const createDraft = (survey) => ({
type: CREATE_DRAFT,
payload: survey,
});

export const deleteDraft = (draftId) => ({
  type: DELETE_DRAFT,
  payload: draftId,
});

export const setQuestions = questions => ({
  type: SET_QUESTIONS,
  payload: questions,
});

export const setResponses = responses => ({
  type: SET_RESPONSES,
  payload: responses,
});
