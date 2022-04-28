import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
// import clientImage '../../Media/image/client1.jpg';

const ReviewCard = ({review}) => {
    const {name,img,text,ratting,rank,institute} =review;
    const newRatting = Math.floor(parseInt(ratting));
    const rattingCall = (newRatting) =>{
        let starts = [];
        for (let x = 0; x < newRatting; x++) {
             starts.push(<StarIcon className='w-4 h-4'></StarIcon>);
        }
        console.log(starts);
        return starts
    }

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
                <p className='flex capitalize mt-2 justify-center items-center text-sm font-medium'>ratting: <span className='ml-2 flex text-yellow-600'>{rattingCall(newRatting)} </span></p>
                

            </div>
        </div>
    );
};

// <StarIcon></StarIcon>

export default ReviewCard;