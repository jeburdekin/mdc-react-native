export function getNextQuestions(responses) {
    // Initialize an empty array for the next questions
    let nextQuestions = [];

    // Iterate over the responses
    for (let questionID in responses) {
      let response = responses[questionID];

      // Based on the response, determine the next questions
      // This will depend on your specific requirements
      // For example, if the response to question 1 is "Yes", you might want to add question 2 to the next questions
      if (questionID === '1' && response === 'Yes') {
        nextQuestions.push({
          questionID: '2',
          questionType: 'YES_NO',
          details: 'Question 2 details',
          response: '',
        });
      }

      // Add more conditions as needed
      // ...
    }

    // Return the next questions
    return nextQuestions;
  }
