const PersonalModel = require('../models/PersonalModel');

exports.getPersonalAll = async (req, res) => {
    try {
        const Personals = await PersonalModel.find();
        res.json({ message: "Lấy danh sách Personal thành công", data: Personals });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPersonal = async (req, res) => {
    const { user_id, plan_details, duration, goal } = req.body;

    if (!user_id || !plan_details || !duration || !goal) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    const newPersonal = new Personal(req.body);
    try {
        const savedPlan = await PersonalModel.save();
        res.status(201).json({ message: "Tạo Personal thành công", data: savedPlan });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.editPersonal = async (req, res) => {
    const { user_id, plan_details, duration, goal } = req.body;

    if (!user_id || !plan_details || !duration || !goal) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    const Personal = await PersonalModel.findById(req.params.id);
    if (!Personal) {
        return res.status(404).json({ message: "Personal plan không tồn tại." });
    }

    try {
        const updatedPlan = await PersonalModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: "Cập nhật Personal thành công", data: updatedPlan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePersonal = async (req, res) => {
    const Personal = await PersonalModel.findById(req.params.id);
    if (!Personal) {
        return res.status(404).json({ message: "Personal plan không tồn tại." });
    }

    try {
        await PersonalModel.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Xóa Personal thành công" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
