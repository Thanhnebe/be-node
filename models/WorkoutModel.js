const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class WorkoutPlan extends Model { }

WorkoutPlan.init(
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
    modelName: 'WorkoutPlan',
    tableName: 'workout_plan',
    timestamps: false,
    hooks: {
      beforeUpdate: (workoutPlan) => {
        workoutPlan.updated_at = new Date();
      },
    },
  }
);

module.exports = WorkoutPlan;
