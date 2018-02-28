const models = require('../models');

module.exports = {
  route: [{
    path: '/user/{username}/toppers',
    method: 'GET',
    handler: (req, res) => {
      models.users.findAll({
        order: [
          ['score', 'DESC']],
        limit: 5,
      }).then((result) => {
        res(result);
      });
    },
  },
  ],
};

