module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define('history', {
    user: DataTypes.STRING,
    answers: DataTypes.JSON,
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return history;
};
