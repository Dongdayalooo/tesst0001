exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.createUser = (req, res) => {
  user.service.createUser(req.body, req.file);
  res.status(200).send("Create User Content successfully.");
};

exports.managerBoard = (req, res) => {
  res.status(200).send("Manager Content.");
};

exports.coordinatorBoard = (req, res) => {
  res.status(200).send("Coordinator Content.");
};

exports.studentBoard = (req, res) => {
  res.status(200).send("Student Content.");
};

exports.guestBoard = (req, res) => {
  res.status(200).send("Guest Content.");
};
