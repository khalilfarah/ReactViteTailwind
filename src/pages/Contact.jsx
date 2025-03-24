import { useState } from "react";
export function Contact(){

    const [IsFill,setIsFill]=useState({name:"",email:"",text:""});

    const btnIsDisabled=IsFill.email==""||IsFill.name==""||IsFill.text=="";
    let btnClasses =false
    if(btnIsDisabled){btnClasses=true }
   else { btnClasses=false }

    return(
        <div className="p-4 mt-5">
        <h1 className="lg:text-4xl md:text-2xl text-xl text-center mx-auto text-gray-800 font-bold pb-4 ">Hey there, Let's <code className="text-ButtonColor">talk</code> about <code className="text-ButtonColor">creative</code> projects</h1>
        <p className="text-center text-lg text-gray-500">Please follow our contact page to setup the contact form.</p>

        <div className="mt-5 mx-auto">
            <div className="mx-auto  items-center lg:w-1/2 space-x-2 mb-4 ">
                <input type="text" placeholder="Name" value={IsFill.name} onChange={(event)=>{setIsFill({...IsFill,name:event.target.value})}}  className="p-2 bg-[#F0F8FF] w-[45%] py-3 focus:font-bold focus:outline-2 focus:outline-ButtonColor  focus:text-ButtonColor"/>
                <input type="email" placeholder="Email" value={IsFill.email} onChange={(event)=>{setIsFill({...IsFill,email:event.target.value})}}  className="p-2 bg-[#F0F8FF] w-[45%] py-3 focus:font-bold peer invalid:outline-red-500 invalid:text-red-500 invalid:outline-2 focus:valid:outline-2 focus:valid:outline-ButtonColor  focus:valid:text-ButtonColor "/>
                <p className="invisible peer-invalid:visible text-red-500 float-right w-[54%]  mx-auto  ">Please provide a valid email address.</p>
                
            </div>

            <div className="mx-auto items-center lg:w-1/2 space-x-2 mb-4  ">
              <textarea placeholder="Message" rows={10}  value={IsFill.text} onChange={(event)=>{setIsFill({...IsFill,text:event.target.value})}} className="p-2 bg-[#F0F8FF] w-[92%] focus:font-bold focus:outline-2 focus:outline-ButtonColor  focus:text-ButtonColor " />
             </div>
             <div className="md:w-1/4 w-[60%] mx-auto  ">
              
                 <button onClick={()=>{alert("Success")}} disabled={btnIsDisabled} className={btnClasses ?"mx-auto px-4 py-3 rounded-full justify-center  w-full bg-gray-400 cursor-not-allowed text-white font-bold":"bg-[#057A8D] hover:bg-blue-700 hover:duration-2000 font-bold  justify-center text-white mx-auto px-4 py-3 rounded-full cursor-pointer w-full "}>Send Message</button>
             </div>

            


        </div>
     

            
        </div>
    );
}