import React from 'react';
// import clientImage '../../Media/image/client1.jpg';

const ReviewCard = ({review}) => {
    const {name,img,text,ratting,rank,institute} =review;

    return (
        <div className='px-4 py-3 flex flex-col items-center text-center border rounded-lg shadow-md hover:shadow-xl cursor-pointer'>
            <div className="">
                <img className='w-20 h-20 rounded-full'  src={img} alt="" />
            </div>
            <div className="mt-6 ">
                <div className="font-semibold text-xl capitalize">{name}</div>
                <p className='text-xs font-semibold mt-2'>{rank}</p>
                <p className='text-sm font-light'>{institute}</p>
                <p className='text-lg text-center mt-1'>{text.length > 150 ? text.slice(0,140)+ `...Read More` : text}</p>
                <p className='text-sm font-medium'>ratting: {ratting} </p>

            </div>
        </div>
    );
};

export default ReviewCard;