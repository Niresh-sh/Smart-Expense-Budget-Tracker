import ExpensesModel from "../Models/ExpensesModel.js";
import mongoose from "mongoose";

export const getDashboardData = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const objectUserId = new mongoose.Types.ObjectId(userId);

    const stats = await ExpensesModel.aggregate([
      { $match: { user: objectUserId } },
      {
        $group: {
          _id: "$type",
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);

    let totalIncome = 0;
    let totalExpenses = 0;

    stats.forEach((stat) => {
      if (stat._id === "income") totalIncome = stat.totalAmount;
      if (stat._id === "expense") totalExpenses = stat.totalAmount;
    });

    const categoryBreakdown = await ExpensesModel.aggregate([
      {
        $match: {
          user: objectUserId,
          type: "expense",
        },
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    const monthlyTrends = await ExpensesModel.aggregate([
  { $match: { user: objectUserId } },
  {
    $group: {
      _id: {
        year: { $year: "$date" },
        month: { $month: "$date" },
      },
      income: {
        $sum: { $cond: [{ $eq: ["$type", "income"] }, "$amount", 0] },
      },
      expense: {
        $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] },
      },
    },
  },
  {
    $sort: { "_id.year": 1, "_id.month": 1 },
  },
  {
    $project: {
      _id: 0,
      year: "$_id.year",
      month: "$_id.month",
      income: 1,
      expense: 1,
    },
  },
]);

    res.status(200).json({
      summary: {
        totalIncome,
        totalExpenses,
        balance: totalIncome - totalExpenses,
      },
      categoryBreakdown,
      monthlyData: monthlyTrends,
    });
  } catch (error) {
    next(error);
  }
};