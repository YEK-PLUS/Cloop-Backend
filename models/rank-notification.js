const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const RankNotification = sequelize.define('ranks_has_company_notification', {
    company_ranks_rank: {
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
  RankNotification.associate = (models) => {
    RankNotification.hasOne(models.Rank, { sourceKey: 'company_ranks_rank',foreignKey:`rank` });
    RankNotification.hasOne(models.Notification, { sourceKey: 'company_notifications_uid',foreignKey:`uid` });
  };
  return RankNotification;
};
