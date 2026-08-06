import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
  ArrowRight
} from "lucide-react";

import { useTranslation } from "react-i18next";

import { loginUser } from "../../utils/auth";
import { login as loginApi } from "../../services/authService";


function Login() {

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();


  const [language, setLanguage] = useState("en");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");



  const changeLanguage = (lang)=>{

    setLanguage(lang);

    i18n.changeLanguage(lang);

  };




  const handleLogin = async (e)=>{

    e.preventDefault();

    setLoading(true);

    setError("");


    try{


      const data = await loginApi(
        email,
        password
      );


      const role = data?.role || "student";


      loginUser(role);


      if(data?.token){

        localStorage.setItem(
          "authToken",
          data.token
        );

      }




      if(role === "admin"){

        navigate("/admin/dashboard");

      }

      else if(role === "leader"){

        navigate("/leader/dashboard");

      }

      else{

        navigate("/home");

      }



    }
    catch(err){

      setError(
        err.message || "Login failed"
      );

    }
    finally{

      setLoading(false);

    }


  };




return (

<div className="min-h-screen flex bg-white">


{/* LEFT SIDE */}

<div className="
hidden
lg:flex
w-1/2
relative
bg-cover
bg-center
bg-[url('https://images.unsplash.com/photo-1564981797816-1043664bf78d')]
">


<div className="
absolute
inset-0
bg-green-900/60
"></div>


<div className="
relative
z-10
text-white
p-12
flex
flex-col
justify-between
">


<h2 className="text-3xl font-bold">

🎓 YouthTrend

</h2>



<div>


<span className="
bg-green-700/70
px-4
py-2
rounded-full
text-sm
">

OFFICIAL STUDENT NETWORK

</span>



<h1 className="
text-5xl
font-bold
mt-6
leading-tight
">

The Hub for Cameroon's
<br/>
Future Leaders

</h1>



<p className="
mt-6
text-gray-200
text-lg
">

Join students across multi-campus networks.
Access resources, communities and opportunities.

</p>



<div className="
flex
gap-8
mt-8
">

<span>
✓ Verified Students
</span>


<span>
👥 Active Communities
</span>


</div>


</div>


</div>


</div>





{/* RIGHT SIDE */}


<div className="
flex-1
flex
items-center
justify-center
p-6
">


<div className="
w-full
max-w-md
">



{/* LANGUAGE */}


<div className="
flex
justify-end
mb-5
">


<div className="
flex
items-center
gap-2
border
rounded-full
px-4
py-2
shadow-sm
">


<Globe
size={18}
className="text-green-700"
/>



<button

onClick={()=>changeLanguage("en")}

className={
language==="en"
?
"text-green-700 font-bold"
:
"text-gray-500"
}

>

🇬🇧 EN

</button>



<span>
|
</span>



<button

onClick={()=>changeLanguage("fr")}

className={
language==="fr"
?
"text-green-700 font-bold"
:
"text-gray-500"
}

>

🇫🇷 FR

</button>


</div>


</div>





{/* LOGIN CARD */}


<form

onSubmit={handleLogin}

className="
border
rounded-3xl
p-8
shadow-sm
bg-white
"


>


<h1 className="
text-4xl
font-bold
text-center
">

{t("welcome") || "Welcome Back"}

</h1>


<p className="
text-center
text-gray-500
mt-2
">

Access your campus dashboard

</p>




{
error &&

<p className="
text-red-600
text-sm
text-center
mt-4
">

{error}

</p>

}





{/* TABS */}


<div className="
flex
bg-gray-100
rounded-xl
mt-8
p-1
">


<button

type="button"

className="
flex-1
bg-white
py-2
rounded-lg
font-semibold
text-green-800
"

>

Login

</button>



<Link

to="/register"

className="
flex-1
text-center
py-2
text-gray-500
"

>

Sign Up

</Link>


</div>






<label className="
block
mt-7
font-medium
">

Email

</label>


<div className="
flex
items-center
border
rounded-xl
mt-2
px-4
">


<Mail
size={20}
className="text-gray-400"
/>


<input

type="email"

required

placeholder="student@university.cm"

className="
w-full
p-3
outline-none
"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>


</div>







<div className="
flex
justify-between
mt-5
">


<label className="font-medium">

Password

</label>



<Link

to="/forgot-password"

className="
text-green-700
text-sm
"

>

Forgot password?

</Link>


</div>





<div className="
flex
items-center
border
rounded-xl
mt-2
px-4
">


<Lock
size={20}
className="text-gray-400"
/>


<input

type={
showPassword
?
"text"
:
"password"
}

required

placeholder="••••••••"

className="
w-full
p-3
outline-none
"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>



<button

type="button"

onClick={()=>
setShowPassword(!showPassword)
}

>

{
showPassword
?
<EyeOff size={20}/>
:
<Eye size={20}/>
}

</button>


</div>







<button

disabled={loading}

type="submit"

className="
w-full
mt-7
bg-[#005429]
text-white
py-4
rounded-xl
font-semibold
flex
justify-center
items-center
gap-2
"

>

{
loading
?
"Logging in..."
:
"Continue to Dashboard"
}


{
!loading &&
<ArrowRight size={20}/>
}


</button>






<div className="
flex
items-center
gap-3
my-7
">


<hr className="flex-1"/>


<span className="text-gray-400 text-sm">

Or continue with

</span>


<hr className="flex-1"/>


</div>




<div className="
flex
gap-4
">


<button

type="button"

className="
flex-1
border
rounded-xl
py-3
"

>

🔍 Google

</button>



<button

type="button"

className="
flex-1
border
rounded-xl
py-3
"

>

✉️ Outlook

</button>


</div>



<p className="
text-center
text-xs
text-gray-500
mt-7
">

By continuing, you agree to YouthTrend's
<br/>
Terms of Service and Privacy Policy.

</p>



</form>



</div>



</div>



</div>


);


}


export default Login;