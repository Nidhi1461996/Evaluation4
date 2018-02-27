const request = require('request-promise');

function questionsAndAnswers(questionsInput) {
  return new Promise((res) => {
    const questions = questionsInput.map((ques) => {
      const object = ques;
      const { question, questionId, ...options } = object;
      const quest = {
        id: questionId,
        question,
        options,
      };
      return quest;
    });

    const answers = [];
    questions.forEach((question) => {
      const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${question.id}`;

      const requestAnswer = request(url);
      answers.push(requestAnswer);
    });
    Promise.all(answers).then((ans) => {
      for (let i = 0; i < answers.length; i += 1) {
        questions[i].answer = JSON.parse(ans[i]).answer;
      }
      res(questions);
      // const promise1 = new Promise((res) => {
      //   res(books);
      //   console.log('........................', books);
      //   return promise1;
      // });
    });
  });
}
module.exports = questionsAndAnswers;
