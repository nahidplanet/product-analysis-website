import { useEffect, useState } from "react";



const useReviews = () => {
    const [getReviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch(`review.json`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return  [getReviews,setReviews];
};

export default useReviews;