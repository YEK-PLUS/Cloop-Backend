module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('medias', {
    uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    media: {
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
  Media.associate = () => true;
  Media.getMedia = async (uid) => {
    const media = await Media.findOne({
      where: { uid },
    });
    return media;
  };
  return Media;
};
