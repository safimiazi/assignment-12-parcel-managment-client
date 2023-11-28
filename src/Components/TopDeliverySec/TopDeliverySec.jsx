import { useEffect, useState } from "react";
import ShareTitle from "../../Share/ShareTitle/ShareTitle";
import TopDeliverySecCard from "./TopDeliverySecCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TopDeliverySec = () => {
const axiosPublic = useAxiosPublic()
const [data, setData] = useState([])
   useEffect(()=>{
    axiosPublic.get('/top-delivery-men')
    .then(res => {
        console.log(res.data);
        setData(res.data)
    })
    .catch(error => {
        console.log(error.message);
    })
   },[])
    return (
        <div>
            <ShareTitle title={"Top Delivery Performers"} des={"Meet our top 5 delivery men who excel in service! Ranked by the number of parcels delivered and their stellar average ratings, these professionals guarantee exceptional delivery experiences. Get to know them below."}></ShareTitle>
            <div className="grid md:grid-cols-5 grid-cols-1 gap-2 mb-20 mt-5">
                {
                   data?.map(singleData => <TopDeliverySecCard singleData={singleData}></TopDeliverySecCard>)
                }
            </div>
        </div>
    );
};

export default TopDeliverySec;