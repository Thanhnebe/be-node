const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db'); // Adjust the path to your sequelize config

class Personal extends Model { }

Personal.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    plan_details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goal: {
      type: DataTypes.ENUM('Weight Loss', 'Muscle Gain', 'Maintenance'),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Personal',
    tableName: 'personal', // Adjust this if your table name differs
    timestamps: false, // Disable Sequelize's automatic timestamps
    hooks: {
      beforeUpdate: (personal) => {
        personal.updated_at = new Date();
      },
    },
  }
);

module.exports = Personal;
