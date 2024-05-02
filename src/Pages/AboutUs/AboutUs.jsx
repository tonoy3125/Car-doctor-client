/* eslint-disable react/no-unescaped-entities */
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
    return (
        <div className="pt-[130px] pb-[130px] ">
            <div className="flex flex-col  lg:flex-row container mx-auto gap-32">
                <div>
                    <div className="relative">
                        <img className="shadow-2xl rounded-[10px] md:w-[460px] w-[350px] h-[400px] md:h-[473px] mx-auto " src={person} alt="" />
                        <img className="w-[250px] md:w-[327px] h-[250px] md:h-[332px] absolute right-3 md:right-24 top-1/2 lg:-right-9 lg:top-1/2 shadow-2xl rounded-[10px] border-[10px] border-white " src={parts} alt="" />
                    </div>
                </div>
                <div className="lg:ml-40 text-center lg:text-left">
                    <h3 className="text-xl font-bold text-[#FF3811] mb-5">About Us</h3>
                    <h1 className="text-[#151515] font-bold text-5xl mb-8 ">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="text-base lg:text-xl font-normal text-[#737373] capitalize md:leading-[30px] mb-5">There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
                    <p className="text-base lg:text-xl font-normal text-[#737373] capitalize md:leading-[30px] mb-8">The majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable. </p>
                    <button className="bg-[#FF3811] text-xl rounded-md  font-semibold text-white py-4 px-7">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;