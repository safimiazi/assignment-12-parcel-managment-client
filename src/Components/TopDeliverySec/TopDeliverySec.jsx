import { useState } from "react";
import ShareTitle from "../../Share/ShareTitle/ShareTitle";
import TopDeliverySecCard from "./TopDeliverySecCard";

const TopDeliverySec = () => {
    const [data, setData] = useState([])
    return (
        <div>
            <ShareTitle title={"Top Delivery Performers"} des={"Meet our top 5 delivery men who excel in service! Ranked by the number of parcels delivered and their stellar average ratings, these professionals guarantee exceptional delivery experiences. Get to know them below."}></ShareTitle>
            <div>
                {
                   data.map(singleData => <TopDeliverySecCard singleData={singleData}></TopDeliverySecCard>)
                }
            </div>
        </div>
    );
};

export default TopDeliverySec;