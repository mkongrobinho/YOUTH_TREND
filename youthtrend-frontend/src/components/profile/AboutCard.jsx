function AboutCard() {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      p-6
    ">


      <h2 className="
        text-xl
        font-bold
        mb-4
      ">
        About
      </h2>



      <p className="
        text-gray-600
        leading-relaxed
      ">
        Passionate software engineering student interested in
        technology, innovation and building solutions that
        create impact. I enjoy collaborating with other students,
        working on projects and learning new skills.
      </p>



      <div className="
        grid
        grid-cols-2
        gap-4
        mt-6
      ">


        <div>

          <p className="
            text-sm
            text-gray-500
          ">
            University
          </p>


          <p className="
            font-semibold
          ">
            University of Yaoundé I
          </p>

        </div>





        <div>

          <p className="
            text-sm
            text-gray-500
          ">
            Faculty
          </p>


          <p className="
            font-semibold
          ">
            Faculty of Science
          </p>

        </div>





        <div>

          <p className="
            text-sm
            text-gray-500
          ">
            Level
          </p>


          <p className="
            font-semibold
          ">
            Software Engineering
          </p>

        </div>





        <div>

          <p className="
            text-sm
            text-gray-500
          ">
            Joined
          </p>


          <p className="
            font-semibold
          ">
            September 2025
          </p>

        </div>


      </div>


    </div>

  );

}


export default AboutCard;