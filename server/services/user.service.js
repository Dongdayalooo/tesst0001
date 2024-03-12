const bcrypt = require("bcrypt");

const UserService = {
  async createUser(userForm, avatar_image) {
    const avatarName = await cloudinaryService.uploadUserAvatarToCloudinary(
      avatar_image.buffer,
      userForm.email
    );

    const user = new User({
      username: userForm.username,
      email: userForm.email,
      avatar: avatarName,
      mobile: userForm.mobile,
      password: bcrypt.hashSync(userForm.password),
      role: userForm.role,
      faculty: userForm.faculty,
    });

    try {
      return await user.save();
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = UserService;
