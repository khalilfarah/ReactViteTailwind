import ProjextImage1 from "../images/project/project-image01.jpg"
import ProjextImage2 from "../images/project/project-image02.jpg"
import ProjextImage3 from "../images/project/project-image03.jpg"
import ProjextImage4 from "../images/project/project-image04.jpg"
import ProjextImage5 from "../images/project/project-image05.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Swipper(){

    const Setting ={
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:600,
        centerMode:false,
        vertical:false,
        fade:false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
        responsive:[
      {
        breakpoint:1024,
        settings: {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:600,
        centerMode:false,
        vertical:false,
        fade:false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 1,
          
        }
      },
      {
        breakpoint:600,
        settings: {
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:600,
            centerMode:false,
            vertical:false,
            fade:false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            initialSlide: 1,
        }
      },
      {
        breakpoint:480,
        settings: {
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:600,
            centerMode:false,
            vertical:false,
            fade:false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            initialSlide: 1,
        }
      }
    ],
        
          
        
    };


    return(

        <section id='swip' className="bg-[#F0F8FF] pb-8 ">
            <div className=" md:w-[60%] lg:w-[40%] pt-8 mx-auto"> 
                <h1 className="text-[#212529] text-center text-lg md:text-3xl">Please take a look through our <code className="text-ButtonColor">featured Digital Trends</code></h1>
            </div>
              
            <Slider   {...Setting}  className="cursor-grabbing mt-8 p-2 mx-auto w-3/4 " >
            
                <div className="relative mx-auto">
                    <img src={ProjextImage1} alt="ProjextImage1" className="mx-auto md:h-[500px] "/>
                    <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] mx-auto py-4 md:py-8 rounded-xl absolute top-[70%] left-[5%] md:left-[20%]  ">
                        <p className="text-gray-600 text-center pt-2 font-semibold">Website</p>
                        <h1 className="text-[#057AAB] text-center text-xl font-bold">Smart Ladis</h1>
                    </div>
                </div>

                <div className="relative mx-auto">
                    <img src={ProjextImage2} alt="ProjextImage2" className="mx-auto md:h-[500px]"/>
                    <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] mx-auto py-4 md:py-8 rounded-xl absolute top-[70%] left-[5%] md:left-[20%]  ">
                        <p className="text-gray-600 text-center pt-2 font-semibold">Branding</p>
                        <h1 className="text-[#057AAB] text-center text-xl font-bold">Shoes Fctory</h1>
                    </div>
                </div>


                <div className="relative mx-auto">
                    <img src={ProjextImage3} alt="ProjextImage3" className="mx-auto md:h-[500px] "/>
                    <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] mx-auto py-4 md:py-8 rounded-xl absolute top-[70%] left-[5%] md:left-[20%]  ">
                        <p className="text-gray-600 text-center pt-2 font-semibold">Video</p>
                        <h1 className="text-[#057AAB] text-center text-xl font-bold">Ultimate HealthCare</h1>
                    </div>
                </div>


                <div className="relative mx-auto">
                    <img src={ProjextImage4} alt="ProjextImage4" className="mx-auto md:h-[500px]"/>
                    <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] mx-auto py-4 md:py-8 rounded-xl absolute top-[70%] left-[5%] md:left-[20%]  ">
                        <p className="text-gray-600 text-center pt-2 font-semibold">Social Media</p>
                        <h1 className="text-[#057AAB] text-center text-xl font-bold">Race Bicycle</h1>
                    </div>
                </div>


                <div className="relative mx-auto">
                    <img src={ProjextImage5} alt="ProjextImage5" className="mx-auto  md:h-[500px] "/>
                    <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] mx-auto py-4 md:py-8 rounded-xl absolute top-[70%] left-[5%] md:left-[20%]  ">
                        <p className="text-gray-600 text-center pt-2 font-semibold">Markting</p>
                        <h1 className="text-[#057AAB] text-center text-xl font-bold">Sweet Go Agency</h1>
                    </div>
                </div>


            </Slider>

        </section>
    );
}