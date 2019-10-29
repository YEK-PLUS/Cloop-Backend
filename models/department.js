
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('company_department', {
    uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    name: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    parent: {
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
  Department.associate = (models) => {
    Department.hasOne(models.Department, { foreignKey: 'parent', sourceKey: 'uid' });
    Department.hasMany(models.DepartmentNotification, { foreignKey: 'company_departments_uid' });
    // Department.hasMany(models.User, { foreignKey: 'uid',sourceKey: 'department' });
  };
  return Department;
};
