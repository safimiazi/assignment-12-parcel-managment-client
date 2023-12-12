import Banner from "../../Components/Banner/Banner";
import CountUpCom from "../../Components/Countup/CountUpCom";
import Faq from "../../Components/Faq/Faq";
import Features from "../../Components/Features/Features";
import TopDeliverySec from "../../Components/TopDeliverySec/TopDeliverySec";

const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto space-y-20">
            <Features></Features>
            <CountUpCom></CountUpCom>
            <TopDeliverySec></TopDeliverySec>
            <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;