function ActivityCard({
  icon: Icon,
  title,
  time,
  color = "green",
}) {

  const colorClasses = {
    green: "text-green-600",
    blue: "text-blue-600",
    red: "text-red-600",
    orange: "text-orange-500",
    gray: "text-gray-600",
  };


  return (
    <div className="flex gap-3">

      <Icon
        size={22}
        className={colorClasses[color] || "text-green-600"}
      />


      <div>

        <h3 className="font-medium">
          {title}
        </h3>


        <p className="text-sm text-gray-500">
          {time}
        </p>


      </div>

    </div>
  );
}

export default ActivityCard;