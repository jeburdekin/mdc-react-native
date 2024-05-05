// Define the skip logic
const skipLogic = {
  '1': {
    'Yes': ['2'],
    'No': ['3'],
    // ...
  },
  '2': {
    'Yes': ['4'],
    'No': ['5'],
    // ...
  },
  // ...
};

export function getNextQuestions(responses) {
  let nextQuestions = [];

  for (let questionID in responses) {
    let response = responses[questionID];

    // Use the skip logic to determine the next questions
    let nextQuestionIDs = skipLogic[questionID][response];
    for (let nextQuestionID of nextQuestionIDs) {
      nextQuestions.push({
        questionID: nextQuestionID,
        questionType: 'YES_NO', // This would also come from your data
        details: 'Question ' + nextQuestionID + ' details', // This would also come from your data
        response: '',
      });
    }
  }

  return nextQuestions;
}
