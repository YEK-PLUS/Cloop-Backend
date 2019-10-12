const bcrypt = require('bcrypt');
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
  User.beforeCreate(async user => {
    user.password = await user.generatePasswordHash();
  });
  User.prototype.generatePasswordHash = async function() {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds);
  };
  User.prototype.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login },
    });
    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }
    return user;
  };
  return User;
};
