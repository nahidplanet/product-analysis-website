import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../App';

const FullReviews = () => {
  
    const detils = useContext(MyContext);
    const id = useParams();
  

    console.log(detils);
    // const details = getReviews.find(detail => detail.id === id);
    // console.log(details);

    return (
        <div>
            <h1 className='text-2xl text-indigo-600 font-bold text-center mt-12'>{`Hey ...Look! This is Route Navigate && The Customar Id is ${id.customarId}`}</h1>
        </div>
    );
};

export default FullReviews;