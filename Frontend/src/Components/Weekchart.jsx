const data = [120, 60, 20, 90, 40, 1200, 50];
const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export default function ChartCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <h2 className="text-[15px] font-semibold text-gray-700 mb-4">
        This Week
      </h2>

      <div className="relative h-65 border-l border-b border-gray-200 pl-6 pb-6">
        
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] text-gray-400 -ml-10">
          <span>1200</span>
          <span>900</span>
          <span>600</span>
          <span>300</span>
          <span>0</span>
        </div>

        <div className="h-full flex items-end justify-between">
          {data.map((value, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-5.5 bg-teal-500 rounded-md"
                style={{ height: `${(value / 1200) * 100}%` }}
              />
              <span className="text-[11px] text-gray-500">
                {labels[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}