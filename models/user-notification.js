const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const UserNotification = sequelize.define('users_has_company_notification', {
    users_uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    company_notifications_uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    visible: {
      type: DataTypes.TINYINT,
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
  UserNotification.associate = (models) => {
    UserNotification.hasOne(models.User, { sourceKey: 'users_uid',foreignKey:`uid` });
    UserNotification.hasOne(models.Notification, { sourceKey: 'company_notifications_uid',foreignKey:`uid` });
  };
  return UserNotification;
};
