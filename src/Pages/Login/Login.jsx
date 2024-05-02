/* eslint-disable no-unused-vars */
import toast, { Toaster } from "react-hot-toast";
import img from "../../assets/images/login/login.svg";
import { CiFacebook } from 'react-icons/ci';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { signIn, setLoading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)


        if (!/^.{6,}$/.test(password)) {
            toast.error("Password must be at least 6 characters");
            return
        }


        signIn(email, password)
            .then(result => {
                console.log('Navigating to:', location?.state ? location.state : "/");
                navigate(location?.state ? location.state : "/")
                swal("Good job!", "User logged Successfully", "success");

            })




            .catch(error => {
                const errormsg = error.message;
                toast.error(errormsg);
                setLoading(false)
                e.target.reset()
            })
    }


    return (
        <div>
            <div className="container mx-auto flex flex-col gap-10 lg:gap-0 items-center lg:flex-row justify-evenly mb-32">
                <div className="md:w-[460px] mt-40 ">
                    <img src={img} alt="" />
                </div>
                <div className="border md:w-[500px] lg:w-[600px] h-[750px] pt-5 md:p-5 lg:p-[75px] bg-[#fff] rounded-lg">
                    <h1 className="text-[40px] font-semibold text-[#444] text-center  mb-12">Sign In</h1>
                    <form onSubmit={handleLogin} className="px-1 md:px-0">
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-[#444] mb-5">Email</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="email" name="email" id="" placeholder="Your Email" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-[#444] mb-5">Confirm Password</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="email" name="password" id="" placeholder="Your Password" />
                        </div>
                        <div className="mb-7">
                            <input type="submit" className="py-4 bg-[#FF3811] text-white w-[415px] md:w-[461px] rounded-lg text-xl font-semibold cursor-pointer" value="Sign In" />
                        </div>
                    </form>
                    <h2 className="text-lg font-semibold text-[#444] text-center mb-7">Or Sign In with</h2>
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <CiFacebook className="text-3xl text-blue-900"></CiFacebook>
                        <FaLinkedinIn className="text-3xl text-blue-700"></FaLinkedinIn>
                        <FcGoogle className="text-3xl"></FcGoogle>
                    </div>
                    <h3 className="text-lg font-semibold text-[#737373] text-center">Dont’t Have An Account ? <Link to='/register'><span className="text-[#FF3811]">Sign Up</span></Link> </h3>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;