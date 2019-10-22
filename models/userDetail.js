module.exports = (sequelize, DataTypes) => {
  const UserDetail = sequelize.define('user_detail', {
    userUid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    phone: {
      type: DataTypes.STRING,
    },
    superVisor: {
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
  UserDetail.associate = (models) => {
    UserDetail.belongsTo(models.UserValues, { foreignKey: 'userUid' });
  };
  return UserDetail;
};
