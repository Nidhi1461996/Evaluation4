const models = require('../models');

module.exports = {
  route: [{
    path: '/user/insert/{username}',
    method: 'GET',
    handler: (req, res) => {
      models.users.findOrCreate({
        where: {
          userName: req.params.username,
        },
        defaults: { // set the default properties if it doesn't exist
          userName: req.params.username,
          score: 0,
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
