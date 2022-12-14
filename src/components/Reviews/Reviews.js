import React, { useContext } from 'react';
import { MyContext } from '../../App';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const getReviews = useContext(MyContext);
    console.log(getReviews);
    return (
        <div className="latest-reviews mt-16 sm:mt-10">
                    <div className="review grid grid-cols-1 sm:grid-cols-3 gap-6 px-10 md:px-24 lg:px-32">
                      { getReviews.map(review=> <ReviewCard key={review.id} review = {review}></ReviewCard>)}
                    </div>
                </div>
    );
};

export default Reviews;