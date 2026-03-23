import UserModel from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginSchema, registerSchema } from "../Validator/AuthValidator.js";

export const RegisterController = async (req, res, next) => {
  try {
    
    const { name, email, password, confirmPassword, role } = await registerSchema.parseAsync(req.body);
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

     const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    res
      .status(201)
      .json({
        message: "User registered successfully",
        user: userWithoutPassword
      });
  } catch (error) {
    next(error);
  }
};

export const LoginController = async (req, res) => {
  try {
    const { email, password } = await loginSchema.parseAsync(req.body);
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    const UserObj = user.toObject();
    delete UserObj.password;
    res.status(200).json({ message: "Login successful", user: UserObj, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
   const users = await UserModel.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
