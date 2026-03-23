import jwt from "jsonwebtoken";

export const generateToken = (user_Id) => {
  return jwt.sign({ userId: user_Id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};