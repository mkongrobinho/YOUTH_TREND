function Avatar({ name, size = "12" }) {

  return (
    <div
      className={`
      w-${size}
      h-${size}
      rounded-full
      bg-green-100
      flex
      items-center
      justify-center
      text-[#005429]
      font-bold
      `}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export default Avatar;