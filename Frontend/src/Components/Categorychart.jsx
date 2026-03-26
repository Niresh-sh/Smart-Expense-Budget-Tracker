import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Rent", value: 400, color: "#2563eb" },
  { name: "Health", value: 150, color: "#14b8a6" },
  { name: "Shopping", value: 100, color: "#f97316" },
  { name: "Education", value: 80, color: "#22c55e" },
  { name: "Bills", value: 70, color: "#e11d48" },
  { name: "Groceries", value: 60, color: "#eab308" },
  { name: "Food", value: 50, color: "#ef4444" },
  { name: "Transport", value: 40, color: "#3b82f6" },
];

export default function CategoryChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
      <h2 className="text-gray-700 font-medium mb-4">
        By Category
      </h2>

      <div className="flex flex-col items-center">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm text-gray-600">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}