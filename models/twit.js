'use strict';
module.exports = (sequelize, DataTypes) => {
  const Twit = sequelize.define (
    'Twit',
    {
      text: DataTypes.STRING,
      author_id: DataTypes.INTEGER
    },
    {}
  );

  Twit.associate = function (models) {
    Twit.belongsToMany (models.Twit, {
      as: 'replies',
      through: 'Reply',
      onDelete: 'CASCADE',
    });

    Twit.belongsTo (models.User, {
      foreignKey: 'author_id',
      as: 'author',
    });
  };
  return Twit;
};
