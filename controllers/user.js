const User = require("../models/User.js");

async function handleGetAllUser(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}
async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ massage: "User not found" });
  return res.json(user);
}

async function handleCreateNewUser(req, res) {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.gender ||
    !req.body.job_title ||
    !req.body.email
  ) {
    return res.status(400).json({ message: "All fields required" });
  }
  const result = await User.create({
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    gender: req.body.gender,
    jobTitle: req.body.job_title,
    email: req.body.email,
  });
  return res.status(200).json({ msg: "User has Created", UserId: result.id });
}

async function handleUserUpdate(req, res) {
  await User.findByIdAndUpdate(req.params.id, {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    gender: req.body.gender,
    email: req.body.email,
    jobTitle: req.body.job_title,
  });
}
async function handleUserDelete(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.send({ msg: "User has deleted" });
}

module.exports = {
  handleGetAllUser,
  handleGetUserById,
  handleCreateNewUser,
  handleUserUpdate,
  handleUserDelete,
};
