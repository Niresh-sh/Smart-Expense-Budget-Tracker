import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
    },
    description: {

        type: String,
        required: true,
    },
    date: { 
        type: Date,
        default: Date.now,
        required: true,
    },
},
{    timestamps: true,},
);
expenseSchema.index({ user: 1, date: -1 });

export default mongoose.model("Expense", expenseSchema);