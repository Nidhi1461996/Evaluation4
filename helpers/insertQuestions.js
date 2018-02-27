const models = require('../models');

const addQuestionsToDatabase = questions => new Promise(() => {
  console.log('hereeeeee');
  models.questions.bulkCreate(questions);
}).then(() => {
  console.log('added data to database');
});

module.exports = addQuestionsToDatabase;
