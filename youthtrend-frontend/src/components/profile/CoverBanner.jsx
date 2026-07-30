function CoverBanner() {

  return (
    <div
      className="
        w-full
        h-72
        rounded-2xl
        overflow-hidden
        relative
      "
    >

      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        alt="Campus"
        className="
          w-full
          h-full
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/20
        "
      />

    </div>
  );
}

export default CoverBanner;