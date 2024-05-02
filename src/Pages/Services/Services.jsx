import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className="container mx-auto">
            <div className="text-center mt-10">
                <h2 className="text-xl font-bold text-[#FF3811] mb-5">Service</h2>
                <h1 className="text-[45px] font-bold text-[#151515] mb-5">Our Service Area</h1>
                <p className="text-base font-normal capitalize text-[#737373] mb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which donot look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-10">
                {
                    services?.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;