import toast, { Toaster } from "react-hot-toast";
import img from "../../assets/images/login/login.svg";
import { CiFacebook } from 'react-icons/ci';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser, logOut, handleUpdateProfile, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)



        if (!/^(?=.*[A-Z]).+$/
            .test(password)) {
            toast.error("Password must be One capital characters");
            return
        }
        if (!/^(?=.*[\W_]).+$/.test(password)) {
            toast.error("Password must be One special characters");
            return
        }
        if (!/^.{6,}$/.test(password)) {
            toast.error("Password must be at least 6 characters");
            return
        }



        createUser(email, password)
            .then(result => {
                handleUpdateProfile(name)
                    .then(() => {

                        logOut()

                        navigate("/login")
                    })
                toast.success('User Create Successfully')


            })
            .catch(error => {
                toast.error('Email Already In use try another one')
                setLoading(false)
            })

    }


    return (
        <div>
            <div className="container mx-auto flex flex-col gap-10 lg:gap-0 items-center lg:flex-row justify-evenly mb-32">
                <div className="md:w-[460px] mt-40 ">
                    <img src={img} alt="" />
                </div>
                <div className="border md:w-[500px] lg:w-[600px] h-[880px] pt-5 md:p-5 lg:p-[75px] bg-[#fff] rounded-lg shadow-xl">
                    <h1 className="text-[40px] font-semibold text-[#444] text-center  mb-12">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="px-1 md:px-0">
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-[#444] mb-5">Name</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="text" name="name" id="" placeholder="Your Name" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-[#444] mb-5">Email</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="email" name="email" id="" placeholder="Your Email" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-[#444] mb-5">Confirm Password</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="password" name="password" id="" placeholder="Your Password" />
                        </div>
                        <div className="mb-7">
                            <input type="submit" className="py-4 bg-[#FF3811] text-white w-[415px] md:w-[461px] rounded-lg text-xl font-semibold" value="Sign Up" />
                        </div>
                    </form>
                    <h2 className="text-lg font-semibold text-[#444] text-center mb-7">Or Sign Up with</h2>
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <CiFacebook className="text-3xl text-blue-900"></CiFacebook>
                        <FaLinkedinIn className="text-3xl text-blue-700"></FaLinkedinIn>
                        <FcGoogle className="text-3xl"></FcGoogle>
                    </div>
                    <h3 className="text-lg font-semibold text-[#737373] text-center">Already have an account?  <Link to='/login'><span className="text-[#FF3811]">Sign In</span></Link> </h3>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;