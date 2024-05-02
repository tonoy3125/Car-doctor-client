import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { BsHandbag } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100 container mx-auto pt-12 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-lg font-semibold text-[#444]"><NavLink to='/'>Home</NavLink></li>
                        <li className="text-lg font-semibold text-[#444]"><NavLink>About</NavLink></li>
                        <li className="text-lg font-semibold text-[#444]"><NavLink>Services</NavLink></li>
                        <li className="text-lg font-semibold text-[#444]"><NavLink>Blog</NavLink></li>
                        <li className="text-lg font-semibold text-[#444]"><NavLink>Contact</NavLink></li>
                        {
                            user?.email ? <>
                                <li><Link to='/booking'>My Bookings</Link></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </>
                                :
                                <li className="text-lg font-semibold text-[#444]"><NavLink to='/login'>Login</NavLink></li>

                        }
                    </ul>
                </div>
                <Link><img className="ml-16 md:ml-52 lg:ml-0 w-1/2 md:w-[100px] lg:w-full" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li className="text-lg font-semibold text-[#444]"><NavLink to='/'>Home</NavLink></li>
                    <li className="text-lg font-semibold text-[#444]"><NavLink>About</NavLink></li>
                    <li className="text-lg font-semibold text-[#444]"><NavLink>Services</NavLink></li>
                    <li className="text-lg font-semibold text-[#444]"><NavLink>Blog</NavLink></li>
                    <li className="text-lg font-semibold text-[#444]"><NavLink>Contact</NavLink></li>
                    {
                        user?.email ? <>
                            <li><Link to='/booking'>My Bookings</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </> : <li className="text-lg font-semibold text-[#444]"><NavLink to='/login'>Login</NavLink></li>

                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2 md:gap-5 mr-2 md:mr-8">
                    <BsHandbag className="md:text-2xl"></BsHandbag>
                    <BsSearch className="md:text-2xl"></BsSearch>
                </div>
                <button className="text-lg font-semibold text-[#FF3811] border px-1 py-1 md:px-7 md:py-4 rounded-md border-[#FF3811]">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;