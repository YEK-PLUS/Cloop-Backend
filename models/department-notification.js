const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const DepartmentNotification = sequelize.define('company_departments_has_company_notification', {
    company_departments_uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    company_notifications_uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
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
  DepartmentNotification.associate = (models) => {
    DepartmentNotification.hasOne(models.Department, { sourceKey: 'company_departments_uid',foreignKey:`uid` });
    DepartmentNotification.hasOne(models.Notification, { sourceKey: 'company_notifications_uid',foreignKey:`uid` });
  };
  return DepartmentNotification;
};
