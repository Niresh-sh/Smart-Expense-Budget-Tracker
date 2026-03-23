import { createExpense, deleteExpense, getExpenses, updateExpense } from "../Controllers/ExpensesController.js";
import { Router } from "express";
import { authMiddleware } from "../Middleware/AuthMiddleware.js";

const router = Router();

router.post("/create", authMiddleware, createExpense);
router.get("/get", authMiddleware, getExpenses);
router.delete("/delete/:id", authMiddleware, deleteExpense);
router.put("/update/:id", authMiddleware, updateExpense);

export default router;