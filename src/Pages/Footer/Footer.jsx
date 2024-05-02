import logo from "../../assets/icons/logo.svg";
import { BsGoogle } from 'react-icons/bs';
import { CiTwitter } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="bg-[#151515]">
            <div className="container mx-auto pt-32 pb-32 flex flex-col md:pl-5 md:flex-row gap-10 md:gap-7 lg:gap-44">
                <div>
                    <img className="bg-white mb-5 ml-40 md:ml-0" src={logo} alt="" />
                    <p className="text-base font-normal text-[#E8E8E8] md:w-[283px] mb-5 text-center md:text-left">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className="flex gap-2 justify-center md:justify-start">
                        <BsGoogle className="text-white text-xl"></BsGoogle>
                        <CiTwitter className="text-white text-xl"></CiTwitter>
                        <AiOutlineInstagram className="text-white text-xl"></AiOutlineInstagram>
                        <AiFillLinkedin className="text-white text-xl"></AiFillLinkedin>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pl-14 md:gap-7 lg:gap-52">
                    <div>
                        <h1 className="text-xl font-semibold text-[#fff] mb-10">About</h1>
                        <p className="text-base font-normal text-[#F3F3F3] mb-6">Home</p>
                        <p className="text-base font-normal text-[#F3F3F3] mb-6">Service</p>
                        <p className="text-base font-normal text-[#F3F3F3]">Contact</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-[#fff] mb-10">Company</h1>
                        <p className="text-base font-normal text-[#F3F3F3] mb-6">Why Car Doctor</p>
                        <p className="text-base font-normal text-[#F3F3F3] mb-6">About</p>

                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-[#fff] mb-10">Support</h1>
                        <p className="text-base font-normal text-[#F3F3F3] mb-6">Support Center</p>
                        <p className="text-base font-normal text-[#F3F3F3] mb-6">Feedback</p>
                        <p className="text-base font-normal text-[#F3F3F3]">Accesbility</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;