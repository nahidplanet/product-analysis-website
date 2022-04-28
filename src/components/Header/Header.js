import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between sm:px-24 h-[80px] bg-[#1B1464] items-center'>
            <div className="log">
                <Link className='font-bold uppercase text-3xl font-mono text-indigo-300 hover:text-white' to={'/'}> Nakon Agency</Link>
            </div>
            <nav className="nav flex ml-2">
                <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/'}></CustomLink>
                <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/home'}>Home</CustomLink>
                <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/reviews'}>Reviews</CustomLink>
                <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/dashboard'}>Dashboard</CustomLink>
                <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/blog'}>Blog</CustomLink>
                <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/about'}>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;