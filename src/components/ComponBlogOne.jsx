import Blogheader from "../images/blog/blog-header-image.jpg";
import Blogsidebar from "../images/blog/blog-sidebar-image.jpg";
import Blogsbone from "../images/blog/blog-sidebar-image01.jpg";
import Blogsbtow from "../images/blog/blog-sidebar-image02.jpg";


export function ComponBlogOne(){

    return(

        <div className="mx-auto items-center">
            <h1 className="text-center mx-auto text-4xl font-bold text-gray-900 mt-10 pb-10">Digital Trend Blog</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 px-5 mx-auto items-center   ">

                <div className="relative mx-auto lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 ">
                    <img src={Blogheader} alt="Blogheader" className="brightness-70 h-[400px]" />
                    <h1 className="text-white  absolute p-2 bottom-1 text-xl md:text-2xl font-bold">The Key to Creative Work is Knowing When to Walk Away</h1>
                </div>

                <div className="flex lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 gap-4 ">
                    <div>
                        <img src={Blogsidebar} alt="Blogsidebar" className="h-[100px]" />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold pb-2 text-gray-900">DESIGN</h1>
                        <p className="text-wrap text-gray-600">Why Truly Accessible Design Benefits Everyone</p>
                    </div>

                </div>


                <div className="flex lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 gap-4 ">
                    <div>
                        <img src={Blogsbone} alt="Blogsbone" className="h-[100px]" />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold pb-2 text-gray-900">LIFESTYLE</h1>
                        <p className="text-wrap text-gray-600">Be Humble About What You Know</p>
                    </div>

                </div>

                <div className="flex lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3 gap-4 ">
                    <div>
                        <img src={Blogsbtow} alt="Blogsbtow" className="h-[100px]"/>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold pb-2 text-gray-900">CODING</h1>
                        <p className="text-wrap text-gray-600">The Mistakes I Made As a Coding Beginner</p>
                    </div>

                </div>

            </div>

        </div>
    );
}