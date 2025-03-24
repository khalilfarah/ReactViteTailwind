import { NavLink } from "react-router-dom";
import Humburger from "../images/hambergar_icon.png"
import { useState } from "react";

export function Navbar(){
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    

 
        
      

    
    return(

        <div className="bg-Navbarcolor  ">
            <div className="container flex items-center justify-between p-8 mx-auto text-white">
            <div><NavLink to="/home" className="lg:font-bold font-semibold flex text-2xl  md:text-4xl hover:text-ButtonColor cursor-pointer"><p className="rotate-90  ">⇲</p>Digital Trend </NavLink></div>

            <div className="space-x-8 hidden md:flex items-center list  ">
                <a href="/#work"  className="hover:text-ButtonColor   " >Studio</a>
                <a href="/#swip"   className="hover:text-ButtonColor   ">Our Works</a>
                <NavLink to="/blog" className="hover:text-ButtonColor  " >Blog</NavLink>
                <NavLink to="/contact"   className="text-ButtonColor border-2 rounded-4xl px-4 py-2 border-ButtonColor font-bold hover:bg-ButtonColor hover:duration-2000 hover:text-white">Contact</NavLink>
            </div>

            <div className="md:hidden cursor-pointer">
                <img src={Humburger} alt="humburger" onClick={() => setIsMenuOpen(!isMenuOpen)} className={isMenuOpen ? "hidden " :"flex h-6  "} />
                <p onClick={() => setIsMenuOpen(!isMenuOpen)}  className={!isMenuOpen ?"hidden ":"text-3xl w-3 px-6 "}>X</p>

            </div>
           
            </div>

          <div className={ isMenuOpen ?"justify-center space-y-5   mx-auto md:hidden text-white pb-4 text-center  " :"hidden"}>
                <a href="/#work"  className="hover:text-ButtonColor block " >Studio</a>
                <a href="/#swip" className="hover:text-ButtonColor block">Our Works</a>
                <NavLink to="/blog"  className="hover:text-ButtonColor block" >Blog</NavLink>
                <NavLink to="/contact" className="text-ButtonColor block border-2 rounded-4xl w-3/4 md:w-1/4 mx-auto px-4 py-2 border-ButtonColor font-bold hover:bg-ButtonColor hover:duration-2000 hover:text-white">Contact</NavLink>

          </div>

        </div>
    );
}