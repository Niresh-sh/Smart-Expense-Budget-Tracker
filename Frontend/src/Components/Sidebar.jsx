// Sidebar.jsx
import {
  LayoutDashboard,
  Receipt,
  LineChart,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#f5f5f5] flex flex-col justify-between border-r border-gray-200 shadow-xl">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
            ET
          </div>
          <div>
            <h1 className="text-sm font-semibold text-gray-800">
              ExpenseTracker
            </h1>
            <p className="text-xs text-gray-500">Smart Finance</p>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-3 px-3 space-y-2">
          {/* Active Item */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-blue-600 cursor-pointer">
            <LayoutDashboard size={18} />
            <span className="text-sm font-medium">Dashboard</span>
          </div>

          {/* Other Items */}
          <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full cursor-pointer">
            <Receipt size={18} />
            <span className="text-sm">Expenses</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full cursor-pointer">
            <LineChart size={18} />
            <span className="text-sm">Analytics</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full cursor-pointer">
            <Settings size={18} />
            <span className="text-sm">Settings</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-5 pb-5">
        {/* User Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white font-medium">
            N
          </div>
          <div>
            <p className="text-sm text-gray-800">niresh</p>
            <p className="text-xs text-gray-500">niresh@gmail.com</p>
          </div>
        </div>

        {/* Logout */}
        <div className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-gray-800">
          <LogOut size={18} />
          <span className="text-sm">Logout</span>
        </div>
      </div>
    </div>
  );
}
