export default function InsightsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-500 p-2 rounded-full text-white">
          📊
        </div>
        <h2 className="text-[15px] font-semibold text-gray-700">
          AI Insights
        </h2>
      </div>

      <div className="space-y-3">
        <Insight text="🏠 Rent is your highest category at 43% of total spending." />
        <Insight text="↻ You have $1689.99 in recurring expenses. Review subscriptions to find savings." />
        <Insight text="📊 You've made 20 transactions. Great tracking consistency!" />
      </div>
    </div>
  );
}

function Insight({ text }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 text-[13px] text-gray-600 leading-relaxed">
      {text}
    </div>
  );
}