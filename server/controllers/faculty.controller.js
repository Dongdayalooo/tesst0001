// hhhh
const facultyService = require("../services/faculty.service");

// Tiếp theo là các hàm điều khiển, ví dụ:
exports.createFaculty = async (req, res) => {
    try {
        const result = await facultyService.createFaculty(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
