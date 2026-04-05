import {
  Home,
  Utensils,
  Car,
  Headphones,
  Film,
  ShoppingCart,
} from "lucide-react";

import TransactionItem from "./TransactionItem";

export default function TransactionsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-semibold text-gray-700">
          Recent Transactions
        </h2>
        <span className="text-[11px] text-gray-400">6 shown</span>
      </div>

      <div className="space-y-4">
        <TransactionItem icon={<Utensils size={16} />} title="Lunch at downtown cafe" sub="Food & Dining · Apr 3" amount="-$45.50" />
        <TransactionItem icon={<Home size={16} />} title="Monthly apartment rent" sub="Rent · Apr 2" tag="monthly" amount="-$1200.00" />
        <TransactionItem icon={<Car size={16} />} title="Uber rides" sub="Transport · Apr 1" amount="-$32.00" />
        <TransactionItem icon={<Headphones size={16} />} title="New headphones" sub="Shopping · Mar 31" amount="-$89.99" />
        <TransactionItem icon={<Film size={16} />} title="Netflix subscription" sub="Entertainment · Mar 30" tag="monthly" amount="-$15.00" />
        <TransactionItem icon={<ShoppingCart size={16} />} title="Weekly groceries" sub="Groceries · Mar 29" tag="weekly" amount="-$65.00" />
      </div>
    </div>
  );
}