import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {

  try {

    const authtoken = req.headers.authorization;

    if (!authtoken) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    if (!authtoken.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const token = authtoken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    next();

  } catch (error) {

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(401).json({ message: "Authentication failed" });
  }
};