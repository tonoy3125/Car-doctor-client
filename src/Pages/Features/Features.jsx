import group from "../../assets/icons/group.svg";
import time from "../../assets/icons/deliveryt.svg";
import support from "../../assets/icons/person.svg";
import wrench from "../../assets/icons/Wrench.svg";
import check from "../../assets/icons/check.svg";
import delivery from "../../assets/icons/deliveryt.svg";

const Features = () => {
    return (
        <div>
            <div className="container px-6  mx-auto mb-24 mt-12">
                <h3 className="text-xl font-bold text-[#FF3811] text-center mb-5">Core Features</h3>
                <h1 className="text-5xl font-bold text-[#151515] text-center mb-5">Why Choose Us</h1>

                <p className="text-base font-normal text-[#737373] text-center capitalize mb-12">
                    the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
                    <div className="border py-7 w-[170px] ">
                        <img className="px-12" src={group} alt="" />
                        <h3 className="text-lg font-bold text-center text-[#444]">Expert Team</h3>
                    </div>
                    <div className="border py-7 w-[170px] ">
                        <img className="px-12" src={time} alt="" />
                        <h3 className="text-lg font-bold text-center text-[#444]">Expert Team</h3>
                    </div>
                    <div className="border py-7 w-[170px] ">
                        <img className="px-16" src={support} alt="" />
                        <h3 className="text-lg font-bold text-center text-[#444]">Expert Team</h3>
                    </div>
                    <div className="border py-7 w-[170px] ">
                        <img className="px-14" src={wrench} alt="" />
                        <h3 className="text-lg font-bold text-center text-[#444]">Expert Team</h3>
                    </div>
                    <div className="border py-7 w-[170px] ">
                        <img className="px-16" src={check} alt="" />
                        <h3 className="text-lg font-bold text-center text-[#444]">Expert Team</h3>
                    </div>
                    <div className="border py-7 w-[170px] ">
                        <img className="px-12" src={delivery} alt="" />
                        <h3 className="text-lg font-bold text-center text-[#444]">Expert Team</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;