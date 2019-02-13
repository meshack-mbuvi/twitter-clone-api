'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define (
    'User',
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: DataTypes.STRING,
    },
    {}
  );

  User.associate = function (models) {
    User.belongsToMany (models.User, {
      as: 'followers',
      foreignKey: 'following_id',
      through: 'Follow',
      onDelete: 'CASCADE',
    });

    User.belongsToMany (models.User, {
      as: 'following',
      foreignKey: 'follower_id',
      through: 'Follow',
      onDelete: 'CASCADE',
    });
  };
  return User;
};
