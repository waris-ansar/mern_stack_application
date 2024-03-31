import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();
export const signIn = async (req, res) => {
  const user = req.body;
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.ACCESS_TOKEN,
      { expiresIn: "1h" }
    );

    //refresh token
    const refreshToken = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.REFRESH_TOKEN,
      { expiresIn: "1y" }
    );

    res.status(200).json({ result: existingUser, token, refreshToken });
  } catch (error) {
    res.status(500).json({ message: `${error} something went wrong` });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and confirm password not same" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email: email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, password: result.password, id: result._id },
      "test",
      { expiresIn: "1h" }
    );

    //refresh token
    const refreshToken = jwt.sign(
      { email: result.email, id: result._id },
      "refreshToken",
      { expiresIn: "1y" }
    );

    res.status(200).json({ result: result, token: token, refreshToken });
  } catch (error) {
    res.status(500).json({ message: `${error} something went wrong` });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No user exist" });
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const token = jwt.sign(
      { email: user.email, password: user.password, id: user._id },
      "test",
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      { email: user.email, password: user.password, id: user._id },
      "test",
      { expiresIn: "1h" }
    );

    return res.status(200).json({ user, token, refreshToken });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};