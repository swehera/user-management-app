const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  const AllUser = await User.find();
  res.status(200).json(AllUser);
});

router.get("/home/:id", async (req, res) => {
  const id = req.params.id;
  const singleUser = await User.findById(id);
  res.status(200).json(singleUser);
});

router.post("/", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      subscription: req.body.subscription,
    });
    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (error) {
    console.log({ error: error });
  }
});

router.get("/update/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json("delete done");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
