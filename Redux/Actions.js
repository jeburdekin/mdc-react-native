export const ADD_SURVEY = 'ADD_SURVEY';
export const CREATE_DRAFT = 'CREATE_DRAFT';
export const DELETE_DRAFT = 'DELETE_DRAFT';

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
