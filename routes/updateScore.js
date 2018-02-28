const models = require('../models');

module.exports = {
  route: [{
    path: '/user/insert/{username}/{score}',
    method: 'GET',
    handler: (req, res) => {
      models.users.update({
        score: req.params.score,
      }, {
        where: {
          userName: req.params.username,
        },
      })
        .then(() => {
          res('updated');
        });
    },
  },
  ],
};
