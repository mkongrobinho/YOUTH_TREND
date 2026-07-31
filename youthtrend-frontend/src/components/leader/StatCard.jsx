function StatCard({ title, value, icon: Icon }) {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-6
      flex
      items-center
      justify-between
      shadow-sm
    ">


      <div>

        <p className="
          text-gray-500
          text-sm
        ">
          {title}
        </p>


        <h2 className="
          text-3xl
          font-bold
          mt-2
        ">
          {value}
        </h2>


      </div>





      <div className="
        w-12
        h-12
        rounded-xl
        bg-green-100
        flex
        items-center
        justify-center
        text-green-700
      ">

        <Icon size={26}/>

      </div>



    </div>

  );

}

export default StatCard;