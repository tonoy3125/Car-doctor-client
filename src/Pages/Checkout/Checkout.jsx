import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Checkout = () => {

    const service = useLoaderData()
    const { _id, title, price, date, img } = service
    const { user } = useContext(AuthContext)


    const handleOrder = e => {
        e.preventDefault()
        const form = e.target;
        const firstname = form.firstname.value
        const lastname = form.lastname.value
        const phone = form.phone.value
        // const email = form.email.value
        const message = form.message.value
        const email = user?.email
        const order = { firstname, lastname, phone, email, message, title, _id, price, date, img }
        console.log(order)


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('service booked succesfully')
                }
            })
    }

    return (
        <div className="container mx-auto bg-[#F3F3F3] rounded-lg">
            <form onSubmit={handleOrder}>
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 lg:px-24 pt-24 ">
                    <div className="w-full md:w-1/2">
                        <input className="pt-4 pb-4 pl-5 w-full bg-[#fff]  text-base font-normal text-[#A2A2A2] rounded-lg" type="text" name="firstname" placeholder="First Name" id="" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <input className="pt-4 pb-4 pl-5 w-full bg-[#fff] text-base font-normal text-[#1B1A1A99] rounded-lg" type="text" name="lastname" placeholder="Last Name" id="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 lg:px-24 ">
                    <div className="w-full md:w-1/2">
                        <input className="pt-4 pb-4 pl-5 w-full bg-[#fff]  text-base font-normal text-[#A2A2A2] rounded-lg" type="text" name="phone" placeholder="Your Phone" id="" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <input className="pt-4 pb-4 pl-5 w-full bg-[#fff] text-base font-normal text-[#1B1A1A99] rounded-lg" type="email" defaultValue={user?.email} name="email" placeholder="Your Email" id="" />
                    </div>
                </div>
                <div className="mb-6 px-1 lg:px-24  ">
                    <div className="w-full">
                        <input className="pt-6 pb-48 pl-4 w-full  bg-[#fff]  text-base font-normal text-[#A2A2A2] rounded-lg" type="text" name="message" placeholder="Your Message" id="" />
                    </div>
                </div>
                <div className="px-24 pb-24">
                    <input type="submit" className="text-xl font-semibold text-[#fff] pt-4 pb-4 w-full bg-[#FF3811] rounded-[10px]" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;