import React, { useContext } from 'react';
import { MyContext } from '../../App';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const getReviews = useContext(MyContext)
    return (
        <div className="latest-reviews mt-10">
                    <div className="review grid grid-cols-3 gap-6 px-24">
                      { getReviews.map(review=> <ReviewCard key={review.id} review={review}></ReviewCard>)}
                    </div>
                </div>
    );
};

export default Reviews;