import WorkGirl from "../images/working-girl.png"

export function Header(){
    const content={
        "title1":"We are ready for your",
        "title2":"digital marketing",
        "textbutton":"Let Us Discuss togother!",
    }

    return(
        <div className="bg-Navbarcolor items-center md:flex md:pt-20 p-4">
            <div className="md:w-[70%] pt-10  p-4">
                <h1 className="lg:text-5xl  px-3  md:text-4xl text-2xl text-white font-semibold text-center md:text-left text-wrap duration-3000 ">{content.title1}</h1>
                <h1 className="lg:text-5xl  px-3 md:text-4xl text-2xl text-white font-semibold text-center md:text-left text-wrap duration-3000 ">{content.title2}</h1>
                <div className="pt-5 w-[70%] md:w-1/2 static mx-auto md:float-left">
                  <button className="text-Navbarcolor text-sm lg:text-lg text-nowrap bg-white hover:duration-2000 hover:text-white w-full  hover:bg-ButtonHeaderHover px-4 py-4 rounded-full font-bold mx-auto  cursor-pointer  ">{content.textbutton}</button>
                 </div> 


            </div>

            <div className="md:w-1/2 px-3">
                <img src={WorkGirl} alt="workgirl" />
            </div>

        </div >
    );
}