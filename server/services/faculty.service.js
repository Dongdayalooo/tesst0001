// hhh
const bcrypt = require("bcrypt");
const Faculty = require("../models/faculty");
const cloudinaryService = require("../services/cloudinary.service");

const facultyService = {
  async createFaculty(facultyForm, imageFile) {
    try {
      let imageName = null;

      // Nếu có ảnh được tải lên, thực hiện upload lên Cloudinary
      if (imageFile) {
        imageName = await cloudinaryService.uploadImageToCloudinary(
          imageFile.buffer,
          facultyForm.name
        );
      }

      // Tạo faculty mới
      const faculty = new Faculty({
        name: facultyForm.name,
        image: imageName, // Nếu không có ảnh, imageName sẽ là null
        description: facultyForm.description,
      });

      // Lưu faculty vào cơ sở dữ liệu
      return await faculty.save();
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = facultyService;
