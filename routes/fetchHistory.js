const models = require('../models');

module.exports = {
  route: [{
    path: '/user/{username}/history',
    method: 'GET',
    handler: (req, res) => {
      models.users.findAll({
        where: {
          userName: req.params.username,
        },
      }).then((result) => {
        res(result);
      });
    },
  },
  ],
};

