'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define (
    'Message',
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      to_user: {
        type: DataTypes.INTEGER,
      },
      from_user: {
        type: DataTypes.INTEGER,
      },
      responses: {
        type: DataTypes.JSON,
      },
    },
    {}
  );

  Message.associate = function (models) {
    Message.belongsTo (models.User, {
      foreignKey: 'from_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      as: 'from',
    });

    Message.belongsTo (models.User, {
      foreignKey: 'to_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      as: 'receiver',
    });
  };

  return Message;
};
