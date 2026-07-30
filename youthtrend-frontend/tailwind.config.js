/** @type {import('tailwindcss').Config} */

export default {

  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme:{

    extend:{


      colors:{


        youth:{
          background:"#fbf9f8",

          surface:"#ffffff",

          primary:"#005429",

          primaryLight:"#1a6e3c",

          text:"#1b1c1c",

          secondary:"#3f4940",

          border:"#bfc9bd"

        }

      },


      borderRadius:{


        sm:"0.25rem",

        DEFAULT:"0.5rem",

        md:"0.75rem",

        lg:"1rem",

        xl:"1.5rem"


      }

    }

  },


  plugins:[]

}