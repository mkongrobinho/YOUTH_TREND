function SocialButton({ icon, text }) {
  return (
    <button
      className="
      w-full
      flex
      items-center
      justify-center
      gap-3
      border
      border-gray-300
      rounded-xl
      py-3
      font-semibold
      hover:bg-gray-50
      transition
      "
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default SocialButton;