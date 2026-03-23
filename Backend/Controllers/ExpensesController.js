import ExpensesModel from "../Models/ExpensesModel.js";
import { expenseSchema } from "../Validator/AuthValidator.js"

export const createExpense = async (req, res) => {
  try {
    const { title, type, amount, date, category } = await expenseSchema.parseAsync(req.body);
    const expense = new ExpensesModel({
      user: req.user.id,
      type,
      amount,
      category,
      description: title,
      date: new Date(date),
    });
    await expense.save();
    res.status(201).json({ message: "Expense created successfully", expense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExpenses = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { search, startDate, endDate, category, type, sortBy, order } = req.query;

    // Build filter
    const filter = { user: req.user.id };
    if (type) filter.type = type;
    if (category) filter.category = category;
    if (startDate && endDate) {
      filter.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    if (search) {
      filter.description = { $regex: search, $options: "i" };
    }

    // Sorting
    const sortField = sortBy || "date";
    const sortOrder = order === "asc" ? 1 : -1;

    // Query database
    const expenses = await ExpensesModel.find(filter)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(limit);

    const totalItems = await ExpensesModel.countDocuments(filter);

    res.status(200).json({
      page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
      data: expenses,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expense = await ExpensesModel.findOne({
  _id: req.params.id,
  user: req.user.id,
});

if (!expense) {
  return res.status(404).json({ message: "Not found" });
}

await expense.deleteOne();

res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const expense = await ExpensesModel.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    if (expense.user.toString() !== req.user.id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const { title, type, amount, date, category } = await expenseSchema.parseAsync(req.body);
    if (type !== undefined) expense.type = type;
    if (amount !== undefined) expense.amount = amount;
    if (category !== undefined) expense.category = category;
    if (title !== undefined) expense.description = title;
    if (date !== undefined) expense.date = date;
    await expense.save();
    res.status(200).json({ message: "Expense updated successfully", expense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
