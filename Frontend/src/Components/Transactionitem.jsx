export default function TransactionItem({ icon, title, sub, amount, tag }) {
  return (
    <div className="flex items-center justify-between">
      
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
          {icon}
        </div>

        <div>
          <p className="text-[13px] text-gray-700">{title}</p>
          <p className="text-[11px] text-gray-400">
            {sub}
            {tag && (
              <span className="text-teal-500 ml-1"> ↻ {tag}</span>
            )}
          </p>
        </div>
      </div>

      <span className="text-[13px] font-medium text-red-500">
        {amount}
      </span>
    </div>
  );
}