import Office from "../images/office.png"
export function Works(){
    const content={
        "post1":"Total 5 HTML pages are included in this template from TemplateMo website. Please check 2 blog pages, project page, and contact page",
        "post2":"You are allowed to use this template for commercial or non-commercial purpose. You are NOT allowed to redistribute the template ZIP file on template collection websites.",

    }

    return(

        <section id='work' className="lg:flex ">
            <div  className="lg:w-3/4 mx-auto p-4">
                <h1 className="text-center md:text-left md:text-3xl  text-xl lg:text-3xl pt-15 text-[#212529] text-wrap  mx-auto font-semibold " >the best <code className="text-[#F1C111]" >Digital Marketing agency</code> in Rio de Janeiro</h1>
                <p className="pt-7 text-wrap text-center md:text-left text-[#898686] text-sm  lg:text-lg ">{content.post1}</p>
                <p className="pt-3  text-wrap text-center md:text-left text-[#898686] text-sm  lg:text-lg ">{content.post2}</p>
            </div>
            <div className="w-3/4  p-4 pt-2 mx-auto">
                <img src={Office}  alt="Office" className="h-full" />
            </div>


        </section>
    );
}