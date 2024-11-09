const PersonalModel = require('../models/PersonalModel');

exports.getPersonalAll = async (req, res) => {
    try {
        const personals = await PersonalModel.findAll();
        res.json({ message: "Lấy danh sách Personal thành công", data: personals });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPersonal = async (req, res) => {
    const { user_id, plan_details, duration, goal } = req.body;

    if (!user_id || !plan_details || !duration || !goal) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    try {
        const newPersonal = await PersonalModel.create({ user_id, plan_details, duration, goal });
        res.status(201).json({ message: "Tạo Personal thành công", data: newPersonal });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.editPersonal = async (req, res) => {
    const { user_id, plan_details, duration, goal } = req.body;

    if (!user_id || !plan_details || !duration || !goal) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    try {
        const personal = await PersonalModel.findByPk(req.params.id);
        if (!personal) {
            return res.status(404).json({ message: "Personal plan không tồn tại." });
        }

        await personal.update({ user_id, plan_details, duration, goal });
        res.json({ message: "Cập nhật Personal thành công", data: personal });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePersonal = async (req, res) => {
    try {
        const personal = await PersonalModel.findByPk(req.params.id);
        if (!personal) {
            return res.status(404).json({ message: "Personal plan không tồn tại." });
        }

        await personal.destroy();
        res.status(204).json({ message: "Xóa Personal thành công" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
