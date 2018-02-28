module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    userName: DataTypes.STRING,
    score: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return users;
};
