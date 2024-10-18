const WorkoutPlan = require('../models/WorkoutModel');

exports.getWorkoutAll = async (req, res) => {
    try {
        const workoutPlans = await WorkoutPlan.find();
        res.json({ message: "Lấy danh sách workout thành công", data: workoutPlans });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createWourkout = async (req, res) => {
    const { user_id, plan_details, duration, goal } = req.body;

    if (!user_id || !plan_details || !duration || !goal) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    const newWorkoutPlan = new WorkoutPlan(req.body);
    try {
        const savedPlan = await newWorkoutPlan.save();
        res.status(201).json({ message: "Tạo workout thành công", data: savedPlan });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.editWourkout = async (req, res) => {
    const { user_id, plan_details, duration, goal } = req.body;

    if (!user_id || !plan_details || !duration || !goal) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    const workoutPlan = await WorkoutPlan.findById(req.params.id);
    if (!workoutPlan) {
        return res.status(404).json({ message: "Workout plan không tồn tại." });
    }

    try {
        const updatedPlan = await WorkoutPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: "Cập nhật workout thành công", data: updatedPlan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteWourkout = async (req, res) => {
    const workoutPlan = await WorkoutPlan.findById(req.params.id);
    if (!workoutPlan) {
        return res.status(404).json({ message: "Workout plan không tồn tại." });
    }

    try {
        await WorkoutPlan.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Xóa workout thành công" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
