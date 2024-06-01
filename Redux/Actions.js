export const ADD_SURVEY = 'ADD_SURVEY';
export const CREATE_DRAFT = 'CREATE_DRAFT';

export const addSurvey = survey => ({
    type: 'ADD_SURVEY',
    payload: survey,
  });


export const createDraft = (survey) => ({
type: CREATE_DRAFT,
payload: survey,
});