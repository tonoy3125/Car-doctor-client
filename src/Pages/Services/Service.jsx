
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="card lg:w-96 border-[1px] border-[#E8E8E8] bg-[#FFF]  rounded-xl">
            <figure className="p-6">
                <img src={img} alt="Shoes" className="rounded-xl h-[208px] w-[314px]" />
            </figure>
            <div>
                <h1 className="text-2xl font-bold text-[#444] px-14 md:px-6 lg:px-8 mb-5">{title}</h1>
                <div className='flex items-center justify-between px-14 md:px-6 lg:px-8 mb-5'>
                    <p className="text-xl font-semibold text-[#FF3811]">Price : ${price}</p>
                    <Link to={`/servicedetails/${_id}`}><AiOutlineArrowRight className='text-2xl text-[#FF3811]'></AiOutlineArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;