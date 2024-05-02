import AboutUs from "../AboutUs/AboutUs";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Testimonal from "../Testimonal/Testimonal";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Features></Features>
            <Testimonal></Testimonal>
            <Footer></Footer>
        </div>
    );
};

export default Home;