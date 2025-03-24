import React from "react";
import ToUP from "../images/ToUp.png"
import { useState, useEffect } from "react";
export  function BackToUp(){

    const [backToTopButton,setBackToTopButton]=useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){  setBackToTopButton(true) }
            else {setBackToTopButton(false)}
        })
    },[])

    const scrollUp =()=>{
      
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

    }

return(
    <div>

        {backToTopButton && (<button className="fixed bottom-[50px] right-[50px] h-[40px] w-[40px] text-3xl  cursor-pointer" onClick={scrollUp}><img src={ToUP} alt="ToUP" className="rounded-full " /></button>)}



    </div>
);



}