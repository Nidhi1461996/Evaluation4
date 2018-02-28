const models = require('../models');

module.exports = {
  route: [{
    path: '/user/{username}/toppers',
    method: 'GET',
    handler: (req, res) => {
      models.users.findAll({
        order: [
          ['score', 'DESC']],
      }).then((result) => {
        res(result);
      });
    },
  },
  ],
};

