const servertest = require('./serverRoute');
const qAndA = require('./questionAndAnswers');


module.exports = []
  .concat(servertest.route)
  .concat(qAndA.route);

