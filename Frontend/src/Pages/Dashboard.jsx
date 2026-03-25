// Dashboard.jsx
import { DollarSign, TrendingUp, Tag, Wallet } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen">

      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome back, niresh 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Here's your financial overview
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          <span className="text-lg">+</span>
          Add Expense
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">Total Expenses</p>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white">
              <DollarSign size={18} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            $2,774.47
          </h2>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">Monthly Spending</p>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-500 text-white">
              <TrendingUp size={18} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            $2,231.97
          </h2>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">Top Category</p>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-400 text-white">
              <Tag size={18} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl">🏠</span>
            <h2 className="text-xl font-semibold text-gray-800">
              Rent
            </h2>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">Transactions</p>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white">
              <Wallet size={18} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            20
          </h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;