const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
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
    rank: {
      type: DataTypes.STRING,
    },
    department: {
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
  let UserDetail;
  User.associate = (models) => {
    UserDetail = models.UserDetail;
    User.belongsTo(models.UserDetail, { foreignKey: 'uid' });
    User.belongsTo(models.UserValues, { foreignKey: 'uid' });
    User.belongsTo(models.Rank, { foreignKey: 'rank', targetKey: 'rank' });
    User.belongsTo(models.Department, { foreignKey: 'department', targetKey: 'uid' });
    User.hasMany(models.UserNotification, { foreignKey: 'users_uid' });
  };
  User.beforeCreate(async (user) => {
    /* eslint no-param-reassign: 0 */
    user.password = await user.generatePasswordHash();
    /* eslint no-param-reassign: 2 */
  });
  User.prototype.generatePasswordHash = async () => {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds);
  };
  User.prototype.validatePassword = async function validatePassword(password) {
    return await bcrypt.compare(password, this.password);
  };
  User.findByLogin = async (login) => {
    let user = await User.findOne({
      where: { username: login },
    });
    if (!user) {
      user = await User.findOne({
        where: { mail: login },
      });
    }
    return user;
  };
  User.findByDate = async (date, type) => {
    const user = await User.findAll({
      include: [
        {
          model: UserDetail,
          where: sequelize.where(
            sequelize.fn('date_format', sequelize.col('birthday'), '%m.%d'),
            type,
            sequelize.fn('date_format', date, '%m.%d'),
          ),
        },
      ],
      limit: (type === '=' ? null : 3),
    });
    return user;
  };
  return User;
};
