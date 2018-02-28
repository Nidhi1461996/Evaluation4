const servertest = require('./serverRoute');
const qAndA = require('./questionAndAnswers');
const userInsert = require('./userInsert');
const updateScore = require('./updateScore');
const getToppers = require('./getToppers');
const historyUpdate = require('./insertToHistoryTable');


module.exports = []
  .concat(servertest.route)
  .concat(qAndA.route)
  .concat(userInsert.route)
  .concat(updateScore.route)
  .concat(getToppers.route)
  .concat(historyUpdate.route);

