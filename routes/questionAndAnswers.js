const request = require('request-promise');
const quesAndAns = require('../helpers/combineQandA');
const insertQuesAndAns = require('../helpers/insertQuestions');


const getAnswers = function getAnswers(questions, res) {
  return new Promise((resolve) => {
    quesAndAns(questions).then((questionsWithAnswers) => {
      resolve(questionsWithAnswers);
      res(questionsWithAnswers);
    });
  });
};

module.exports = {
  getAnswers,
  route: [{
    path: '/questions',
    method: 'GET',
    handler: (req, res) => {
      request({
        url: 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions',
        method: 'GET',
      })
        .then(questions => getAnswers(JSON.parse(questions).allQuestions, res))
        .then((questions) => {
          insertQuesAndAns(questions);
          // console.log('#####################', questions);
        });
    },
  },
  ],
};
