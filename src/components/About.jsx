import FemaleImg from "../images/female-avatar.png"
export function About(){

    return(
        <section className="md:flex p-4 items-center">
            <div className="lg:w-1/2 md:w-3/4 "> 
                <img src={FemaleImg} alt="FemaleImg"/>

            </div>
            <div className=" md:w-3/4 text-center md:text-left">
                <p className="text-gray-500  uppercase  mb-8 text-xl">CLIENT TESTIMONIALS</p>
                <h1 className="text-[#212529] font-semibold text-3xl lg:w-3/4">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo.</h1>
                <p className="mt-8 text-lg text-gray-500"><code className="text-ButtonColor">Mary Zoe</code>/ Digital Agency (CEO)</p>
            </div>


        </section>
    );
}