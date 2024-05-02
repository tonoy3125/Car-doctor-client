import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className="container mx-auto ">
            <div className="carousel w-full rounded-lg lg:h-[800px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex gap-5 md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-center md:text-left space-y-3 lg:space-y-7 md:pl-12 lg:pl-24 md:w-1/2 mt-9 md:mt-0">
                            <h1 className="lg:text-6xl text-xl md:text-4xl font-bold text-white  ">Affordable  Price For Car Servicing</h1>
                            <p className=" text-sm md:text-base lg:text-lg font-normal capitalize text-white">There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                            <div>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white bg-[#FF3811] text-lg font-semibold rounded-md mr-5">Discover More</button>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white border text-lg font-semibold border-white rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle bg-transparent"><AiOutlineArrowLeft className="text-xl font-extrabold text-white "></AiOutlineArrowLeft></a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811]"><AiOutlineArrowRight className="text-xl font-extrabold text-white"></AiOutlineArrowRight></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex gap-5 md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-center md:text-left space-y-3 lg:space-y-7 md:pl-12 lg:pl-24 md:w-1/2 mt-9 md:mt-0">
                            <h1 className="lg:text-6xl text-xl md:text-4xl font-bold text-white  ">Affordable  Price For Car Servicing</h1>
                            <p className=" text-sm md:text-base lg:text-lg font-normal capitalize text-white">There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                            <div>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white bg-[#FF3811] text-lg font-semibold rounded-md mr-5">Discover More</button>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white border text-lg font-semibold border-white rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-transparent"><AiOutlineArrowLeft className="text-xl font-extrabold text-white "></AiOutlineArrowLeft></a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811]"><AiOutlineArrowRight className="text-xl font-extrabold text-white"></AiOutlineArrowRight></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex gap-5 md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-center md:text-left space-y-3 lg:space-y-7 md:pl-12 lg:pl-24 md:w-1/2 mt-9 md:mt-0">
                            <h1 className="lg:text-6xl text-xl md:text-4xl font-bold text-white  ">Affordable  Price For Car Servicing</h1>
                            <p className=" text-sm md:text-base lg:text-lg font-normal capitalize text-white">There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                            <div>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white bg-[#FF3811] text-lg font-semibold rounded-md mr-5">Discover More</button>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white border text-lg font-semibold border-white rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-transparent"><AiOutlineArrowLeft className="text-xl font-extrabold text-white "></AiOutlineArrowLeft></a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811]"><AiOutlineArrowRight className="text-xl font-extrabold text-white"></AiOutlineArrowRight></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex gap-5 md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-center md:text-left space-y-3 lg:space-y-7 md:pl-12 lg:pl-24 md:w-1/2 mt-9 md:mt-0">
                            <h1 className="lg:text-6xl text-xl md:text-4xl font-bold text-white  ">Affordable  Price For Car Servicing</h1>
                            <p className=" text-sm md:text-base lg:text-lg font-normal capitalize text-white">There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                            <div>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white bg-[#FF3811] text-lg font-semibold rounded-md mr-5">Discover More</button>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white border text-lg font-semibold border-white rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-transparent"><AiOutlineArrowLeft className="text-xl font-extrabold text-white "></AiOutlineArrowLeft></a>
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811]"><AiOutlineArrowRight className="text-xl font-extrabold text-white"></AiOutlineArrowRight></a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" />
                    <div className="absolute flex gap-5 md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-center md:text-left space-y-3 lg:space-y-7 md:pl-12 lg:pl-24 md:w-1/2 mt-9 md:mt-0">
                            <h1 className="lg:text-6xl text-xl md:text-4xl font-bold text-white  ">Affordable  Price For Car Servicing</h1>
                            <p className=" text-sm md:text-base lg:text-lg font-normal capitalize text-white">There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                            <div>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white bg-[#FF3811] text-lg font-semibold rounded-md mr-5">Discover More</button>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white border text-lg font-semibold border-white rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle bg-transparent"><AiOutlineArrowLeft className="text-xl font-extrabold text-white "></AiOutlineArrowLeft></a>
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811]"><AiOutlineArrowRight className="text-xl font-extrabold text-white"></AiOutlineArrowRight></a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full" />
                    <div className="absolute flex gap-5 md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-center md:text-left space-y-3 lg:space-y-7 md:pl-12 lg:pl-24 md:w-1/2 mt-9 md:mt-0">
                            <h1 className="lg:text-6xl text-xl md:text-4xl font-bold text-white  ">Affordable  Price For Car Servicing</h1>
                            <p className=" text-sm md:text-base lg:text-lg font-normal capitalize text-white">There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                            <div>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white bg-[#FF3811] text-lg font-semibold rounded-md mr-5">Discover More</button>
                                <button className="px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white border text-lg font-semibold border-white rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle bg-transparent"><AiOutlineArrowLeft className="text-xl font-extrabold text-white "></AiOutlineArrowLeft></a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811]"><AiOutlineArrowRight className="text-xl font-extrabold text-white"></AiOutlineArrowRight></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;