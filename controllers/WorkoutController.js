const WorkoutPlan = require('../models/WorkoutModel');

exports.getWorkoutAll = async (req, res) => {
    try {
        const workoutPlans = await WorkoutPlan.findAll();
        res.json({ message: "Lấy danh sách workout thành công", data: workoutPlans });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createWorkout = async (req, res) => {
    const { user_id, plan_details, duration, goal } = req.body;

    if (!user_id || !plan_details || !duration || !goal) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    try {
        const newWorkoutPlan = await WorkoutPlan.create({ user_id, plan_details, duration, goal });
        res.status(201).json({ message: "Tạo workout thành công", data: newWorkoutPlan });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.editWorkout = async (req, res) => {
    const { user_id, plan_details, duration, goal } = req.body;

    if (!user_id || !plan_details || !duration || !goal) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    try {
        const workoutPlan = await WorkoutPlan.findByPk(req.params.id);
        if (!workoutPlan) {
            return res.status(404).json({ message: "Workout plan không tồn tại." });
        }

        await workoutPlan.update({ user_id, plan_details, duration, goal });
        res.json({ message: "Cập nhật workout thành công", data: workoutPlan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteWorkout = async (req, res) => {
    try {
        const workoutPlan = await WorkoutPlan.findByPk(req.params.id);
        if (!workoutPlan) {
            return res.status(404).json({ message: "Workout plan không tồn tại." });
        }

        await workoutPlan.destroy();
        res.status(204).json({ message: "Xóa workout thành công" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
