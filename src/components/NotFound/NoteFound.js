import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const NoteFound = () => {
    return (
        <div className='bg-[#191919] h-screen '>
            <div className='text-center pb-10'>
                <h1 className=' m-0 p-0 text-[250px] text-gray-300 font font-bold'>404</h1>
                <h2 className='text-6xl font-bold font-monotext-gray-500 text-lime-100'>This page is not available!</h2>
                
                <div  className='flex  justify-center items-center'>
                    <div><Link to={'/home'} className='flex items-center ml-[300px ] mt-12 text-white border rounded p-3'><ArrowNarrowLeftIcon className='h-6 mr-3 mt-1'></ArrowNarrowLeftIcon> go back</Link></div>
                </div>
            </div>
        </div>
    );
};

export default NoteFound;