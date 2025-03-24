import Facebook from "../images/facebook.png"
import Call from "../images/call.png"
import Location from "../images/location.png"
import Instgram from "../images/instagram.png"
import LinkedIn from "../images/linkedin.png"
import Twitter from "../images/twitter.png"
export function Foteer(){
    return(

        <div className="bg-[#171819] p-4 h-[750px] md:h-[700px]  lg:h-[450px] items-center">

            <div className="grid lg:grid-cols-3 mx-auto gap-8 pb-10 text-[#858585] items-center pt-20 p-6  ">
                <div>
                    <h1 className="text-white font-bold text-xl md:text-2xl lg:text-4xl text-center  lg:text-left">We make creative<code className="text-ButtonColor">brands</code>only.</h1>
                </div>

                <div className="mx-auto ">
                    <h1 className="text-2xl pb-5 text-ButtonColor pt-5">CONTACT INFO</h1>
                    <div className="flex gap-3 pb-5">
                        <img src={Call} alt="Call" />
                        <p className="hover:text-ButtonColor hover:underline">+963 991132008</p>
                    </div>
                    <div className="flex gap-3">
                        <img src={Location} alt="location" />
                        <p className="hover:text-ButtonColor hover:underline">SYRIA-HOMS</p>
                    </div>

                </div>


                <div className="mx-auto">
                    <h1 className="text-2xl pb-5 text-center lg:text-left text-ButtonColor">OUR STUDIO</h1>
                    <div className="flex gap-3">
                       <p> Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil</p>
                    </div>
                    

                </div>

               

            </div>

            <div className="grid lg:grid-cols-3 mx-auto gap-8 text-[#858585] items-center pt-20 p-6 ">
               

                <div className="flex gap-5 items-center mx-auto">
                    <p className="hover:text-ButtonColor underline cursor-pointer">Stories</p>
                    <p className="hover:text-ButtonColor underline cursor-pointer">Work With US </p>
                    <p className="hover:text-ButtonColor underline cursor-pointer">Privacy</p>

                </div>

                <div className="flex gap-8 mx-auto">
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Instgram} alt="instagram" />
                    <img src={LinkedIn} alt="linkedin" />

                </div>

                <div>
                    <p className="text-center lg:text-left">Copyright © 2025 Your Company| BY <code className="hover:text-ButtonColor ">Eng-khalil-Farah</code></p>
                </div>



            </div>


          

        </div>
    );
}