import axios from "axios";

export function recordAnswers(answers) {
  axios.post("https://mdc-app-proto-default-rtdb.firebaseio.com/SurveyAnswers.json", { answers });
}
