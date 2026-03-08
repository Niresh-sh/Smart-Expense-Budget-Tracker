import ExpensesModel from "../Models/ExpensesModel";

export const createExpense = async (req, res) => {
  try {
    const { title, type, amount, date, category } = req.body;
    const expense = new ExpensesModel({
      user: req.user._id,
      type,
      amount,
      category,
      description: title,
      date,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpensesModel.find({ user: req.user._id }).sort({ date: -1 });
    res.status(200).json(expenses);
    } catch (error) {   
    res.status(500).json({ message: error.message });
  }
};

export const deleteExpense = async (req, res) => {  
    try {
    const expense = await ExpensesModel.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    await expense.remove();
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
    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }   

    const { title, type, amount, date, category } = req.body;
    expense.type = type || expense.type;
    expense.amount = amount || expense.amount;
    expense.category = category || expense.category;
    expense.description = title || expense.description;
    expense.date = date || expense.date;
    await expense.save();
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};
