import React from 'react';
import { Link } from 'react-router-dom';

const NoteFound = () => {
    return (
        <div className='bg-[#191919] h-screen '>
            <div className='text-center pb-10'>
                <h1 className=' m-0 p-0 text-[250px] text-gray-300 font font-bold'>404</h1>
                <h2 className='text-6xl font-bold font-monotext-gray-500 text-lime-100'>This page is not available!</h2>
                <button className='text-xl font-bold text-gray-500 border-2 rounded-md mt-5 px-5 py-2'> <Link to={'/home'}>- go back</Link></button>
            </div>
        </div>
    );
};

export default NoteFound;