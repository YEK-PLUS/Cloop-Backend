module.exports = (sequelize, DataTypes) => {
  const UserDetail = sequelize.define('user_detail', {
    user_uid: {
      type: DataTypes.CHAR,
      primaryKey: true
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
    phone: {
      type: DataTypes.STRING,
    },
    superVisor: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW
    }
  });
  UserDetail.associate = models => {
    return true
  };
  return UserDetail;
};
