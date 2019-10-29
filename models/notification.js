const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('company_notification', {
    uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    notification: {
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
  Notification.associate = (models) => {
    Notification.hasMany(models.UserNotification, { foreignKey: 'company_notifications_uid' });
    Notification.hasOne(models.UserNotification, {as:`user`, foreignKey: 'company_notifications_uid' });
    Notification.hasMany(models.DepartmentNotification, { foreignKey: 'company_notifications_uid' });
    Notification.hasMany(models.RankNotification, { foreignKey: 'company_notifications_uid' });
  };
  return Notification;
};
