const models = require('../models');

module.exports = {
  route: [{
    path: '/user/history/{username}',
    method: 'POST',
    handler: (req, res) => {
      console.log(req.payload.answer, '#############');
      const obj = {};
      for (let i = 0; i < req.payload.answer.length; ++i) {
        obj[i] = req.payload.answer[i];
      }
      console.log(obj, '.......................');
      models.history.findOrCreate({
        where: {
          user: req.params.username,
        },
        defaults: { // set the default properties if it doesn't exist
          user: req.params.username,
          answers: obj,
        },
      })
        .then((result) => {
          if (!result[1]) {
            res('name exists');
          } else {
            res('done');
          }
        });
    },
  },
  ],
};
