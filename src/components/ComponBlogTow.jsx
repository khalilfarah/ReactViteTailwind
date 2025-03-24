import NewsLetter from "../images/newsletter.png"
import { useState } from "react";
export function ComponBlogTow(){

    const [IsFill,setIsFill]=useState({email:"",isagree:false,});

    const btnIsDisabled=IsFill.email==""||IsFill.isagree==false;
    let btnClasses =false
    if(btnIsDisabled){btnClasses=true }
   else { btnClasses=false }
    return(

        <div className="md:flex items-center mx-auto p-4 ">

            <div className="md:w-1/2">
                <img src={NewsLetter} alt="NewsLetter" />
            </div>

            <div className="md:w-1/2  mx-auto ">
                <p className="text-gray-500 text-xl pb-4">EMAIL NEWSLETTER</p>
                <h1 className="font-semibold text-xl text-wrap md:text-3xl mlg:w-[60%]">Let’s stay up-to-date. We'll share you all good stuffs.</h1>
                <div>
                    <input type="email" placeholder="Please Enter Your Email" value={IsFill.email} onChange={(event)=>{setIsFill({...IsFill,email:event.target.value})}} className="p-3 bg-[#F0F8FF] mt-5 mb-1 w-[80%] md:w-[75%] lg:w-[60%] peer focus:font-bold invalid:outline-red-500 invalid:text-red-500 invalid:outline-2 focus:valid:outline-2 focus:valid:outline-ButtonColor  focus:valid:text-ButtonColor" />
                    <p className="invisible peer-invalid:visible text-red-500">Please provide a valid email address.</p>
                    <p className="text-sm text-gray-500 p-2">We'll NOT share your email address to anyone else.</p>
                </div>
                <div>
                    <input type="checkbox" checked={IsFill.isagree} onChange={(event)=>{setIsFill({...IsFill,isagree:event.target.checked})}} className="mr-2 accent-ButtonColor" />
                    <label>Please send me a monthly newsletter.</label>

                </div>
                <div className="mx-auto  ">
                    <button onClick={()=>{alert("Success")}} disabled={btnIsDisabled} className={btnClasses ?"bg-gray-300 text-white cursor-not-allowed p-2   rounded-full  w-[60%] mx-auto mt-3 font-bold" : "bg-ButtonColor text-white p-2   cursor-pointer rounded-full  w-[60%] mx-auto mt-3 font-bold hover:bg-amber-600 hover:duration-2000 "}>Sign up</button>
                </div>

            </div>


        </div>
    );
}