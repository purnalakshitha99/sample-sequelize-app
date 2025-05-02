module.exports = (sequelize, DataTypes) => {
    return sequelize.define("university", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
      },
    });
  };