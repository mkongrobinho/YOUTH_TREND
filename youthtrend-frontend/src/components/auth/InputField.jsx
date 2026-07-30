function InputField({
  icon,
  type = "text",
  placeholder,
  label,
}) {
  return (
    <div className="space-y-2">
      <label className="font-semibold text-gray-700">
        {label}
      </label>

      <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-[#005429] transition">

        <span className="text-gray-400">
          {icon}
        </span>

        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 ml-3 outline-none bg-transparent"
        />

      </div>
    </div>
  );
}

export default InputField;