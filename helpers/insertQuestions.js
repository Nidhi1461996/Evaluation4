const models = require('../models');

const addQuestionsToDatabase = questions => new Promise(() => {
  models.questions.bulkCreate(questions);
}).then(() => {
  console.log('added data to database');
});

module.exports = addQuestionsToDatabase;
