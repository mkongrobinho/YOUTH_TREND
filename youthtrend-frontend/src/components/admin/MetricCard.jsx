function MetricCard({
  icon: Icon,
  title,
  value,
  change,
  iconBg = "bg-green-100",
  iconColor = "text-green-700",
  changeColor = "text-green-600",
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">

      <div className="flex justify-between items-start">

        <div
          className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}
        >
          <Icon className={iconColor} size={22} />
        </div>

        <span className={`font-semibold text-sm ${changeColor}`}>
          {change}
        </span>

      </div>

      <p className="text-gray-500 mt-5">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-1">
        {value}
      </h2>

    </div>
  );
}

export default MetricCard;