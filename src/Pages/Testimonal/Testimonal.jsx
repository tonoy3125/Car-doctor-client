/* eslint-disable react/no-unescaped-entities */
import avatar1 from "../../assets/icons/avatar1.jpg";
import { PiQuotesFill } from 'react-icons/pi';
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import { AiOutlineArrowLeft } from 'react-icons/ai';

const Testimonal = () => {
    return (
        <section className="bg-white">
            <div className="container px-6  mx-auto mb-24 mt-12">
                <h3 className="text-xl font-bold text-[#FF3811] text-center mb-5">Testimonial</h3>
                <h1 className="text-5xl font-bold text-[#151515] text-center mb-5">What Customer Says</h1>

                <p className="text-base font-normal text-[#737373] text-center capitalize mb-12">
                    the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
                </p>

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="border-[1px] border-[#F3F3F3] bg-[#fff] rounded-[10px] ">
                                <div className="flex items-center gap-5 px-12  pt-12 mb-5 ">
                                    <img className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-4 ring-gray-300 " src={avatar1} alt="" />
                                    <div className="mr-24">
                                        <h1 className="text-2xl font-bold text-[#444]">Awlad Hossain</h1>
                                        <p className="text-xl font-semibold text-[#737373]">Businessman</p>
                                    </div>
                                    <div>
                                        <PiQuotesFill className="text-[56px] text-[#FF381133]"></PiQuotesFill>
                                    </div>
                                </div>
                                <div className="px-14">
                                    <p className="text-base font-normal mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                                    <div className="rating rating-md mb-12">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                            </div>
                            <div className="border-[1px] border-[#F3F3F3] bg-[#fff] rounded-[10px] ">
                                <div className="flex items-center gap-5 px-12  pt-12 mb-5 ">
                                    <img className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-4 ring-gray-300 " src={avatar1} alt="" />
                                    <div className="mr-24">
                                        <h1 className="text-2xl font-bold text-[#444]">Awlad Hossain</h1>
                                        <p className="text-xl font-semibold text-[#737373]">Businessman</p>
                                    </div>
                                    <div>
                                        <PiQuotesFill className="text-[56px] text-[#FF381133]"></PiQuotesFill>
                                    </div>
0                                </div>
                                <div className="px-14">
                                    <p className="text-base font-normal mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                                    <div className="rating rating-md mb-12">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex gap-5">
                            <div className="border-[1px] border-[#F3F3F3] bg-[#fff] rounded-[10px] ">
                                <div className="flex items-center gap-5 px-12  pt-12 mb-5 ">
                                    <img className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-4 ring-gray-300 " src={avatar1} alt="" />
                                    <div className="mr-24">
                                        <h1 className="text-2xl font-bold text-[#444]">Tonoy Hossain</h1>
                                        <p className="text-xl font-semibold text-[#737373]">Businessman</p>
                                    </div>
                                    <div>
                                        <PiQuotesFill className="text-[56px] text-[#FF381133]"></PiQuotesFill>
                                    </div>
                                </div>
                                <div className="px-14">
                                    <p className="text-base font-normal mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                                    <div className="rating rating-md mb-12">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                            </div>
                            <div className="border-[1px] border-[#F3F3F3] bg-[#fff] rounded-[10px] ">
                                <div className="flex items-center gap-5 px-12  pt-12 mb-5 ">
                                    <img className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-4 ring-gray-300 " src={avatar1} alt="" />
                                    <div className="mr-24">
                                        <h1 className="text-2xl font-bold text-[#444]">Awlad Hossain</h1>
                                        <p className="text-xl font-semibold text-[#737373]">Businessman</p>
                                    </div>
                                    <div>
                                        <PiQuotesFill className="text-[56px] text-[#FF381133]"></PiQuotesFill>
                                    </div>
                                </div>
                                <div className="px-14">
                                    <p className="text-base font-normal mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                                    <div className="rating rating-md mb-12">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex gap-5">
                            <div className="border-[1px] border-[#F3F3F3] bg-[#fff] rounded-[10px] ">
                                <div className="flex items-center gap-5 px-12  pt-12 mb-5 ">
                                    <img className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-4 ring-gray-300 " src={avatar1} alt="" />
                                    <div className="mr-24">
                                        <h1 className="text-2xl font-bold text-[#444]">Awlad Hossain</h1>
                                        <p className="text-xl font-semibold text-[#737373]">Businessman</p>
                                    </div>
                                    <div>
                                        <PiQuotesFill className="text-[56px] text-[#FF381133]"></PiQuotesFill>
                                    </div>
                                </div>
                                <div className="px-14">
                                    <p className="text-base font-normal mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                                    <div className="rating rating-md mb-12">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                            </div>
                            <div className="border-[1px] border-[#F3F3F3] bg-[#fff] rounded-[10px] ">
                                <div className="flex items-center gap-5 px-12  pt-12 mb-5 ">
                                    <img className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-4 ring-gray-300 " src={avatar1} alt="" />
                                    <div className="mr-24">
                                        <h1 className="text-2xl font-bold text-[#444]">Awlad Hossain</h1>
                                        <p className="text-xl font-semibold text-[#737373]">Businessman</p>
                                    </div>
                                    <div>
                                        <PiQuotesFill className="text-[56px] text-[#FF381133]"></PiQuotesFill>
                                    </div>
                                </div>
                                <div className="px-14">
                                    <p className="text-base font-normal mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                                    <div className="rating rating-md mb-12">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex gap-5">
                            <div className="border-[1px] border-[#F3F3F3] bg-[#fff] rounded-[10px] ">
                                <div className="flex items-center gap-5 px-12  pt-12 mb-5 ">
                                    <img className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-4 ring-gray-300 " src={avatar1} alt="" />
                                    <div className="mr-24">
                                        <h1 className="text-2xl font-bold text-[#444]">Awlad Hossain</h1>
                                        <p className="text-xl font-semibold text-[#737373]">Businessman</p>
                                    </div>
                                    <div>
                                        <PiQuotesFill className="text-[56px] text-[#FF381133]"></PiQuotesFill>
                                    </div>
                                </div>
                                <div className="px-14">
                                    <p className="text-base font-normal mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                                    <div className="rating rating-md mb-12">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                            </div>
                            <div className="border-[1px] border-[#F3F3F3] bg-[#fff] rounded-[10px] ">
                                <div className="flex items-center gap-5 px-12  pt-12 mb-5 ">
                                    <img className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-4 ring-gray-300 " src={avatar1} alt="" />
                                    <div className="mr-24">
                                        <h1 className="text-2xl font-bold text-[#444]">Awlad Hossain</h1>
                                        <p className="text-xl font-semibold text-[#737373]">Businessman</p>
                                    </div>
                                    <div>
                                        <PiQuotesFill className="text-[56px] text-[#FF381133]"></PiQuotesFill>
                                    </div>
                                </div>
                                <div className="px-14">
                                    <p className="text-base font-normal mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                                    <div className="rating rating-md mb-12">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonal;