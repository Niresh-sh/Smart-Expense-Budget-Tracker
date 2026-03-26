import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Oct", value: 0 },
  { name: "Nov", value: 0 },
  { name: "Dec", value: 0 },
  { name: "Jan", value: 0 },
  { name: "Feb", value: 500 },
  { name: "Mar", value: 2400 },
];

export default function MonthlySpending() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
      <h2 className="text-gray-700 font-medium mb-4">
        Monthly Spending
      </h2>

      <LineChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="name" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#1d4ed8"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
      </LineChart>
    </div>
  );
}