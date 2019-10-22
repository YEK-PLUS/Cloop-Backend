module.exports = (sequelize, DataTypes) => {
  const UserValues = sequelize.define('user_values', {
    userUid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
  });
  UserValues.associate = () => true;
  return UserValues;
};
