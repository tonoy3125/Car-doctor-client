import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData()
    const { _id, title, } = service
    return (
        <div>
            <h1> Title : {title}</h1>
            <Link to={`/checkout/${_id}`}><button className="btn btn-accent">Proceed Checkout</button></Link>
        </div>
    );
};

export default ServiceDetails;