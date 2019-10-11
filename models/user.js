module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    uid: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    mail: {
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
  User.associate = models => {
    User.belongsTo(models.UserDetail,{ foreignKey: 'uid' });
  };
  return User;
};
