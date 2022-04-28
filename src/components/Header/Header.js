import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuToggler = (open) => {

        return setOpen(open)
    }
    return (
        <div className='all bg-[rgb(27,20,100)] w-full'>
            {/* humbarger start  */}
            <div onClick={() => menuToggler(!open)} className="humbarger sm:hidden absolute top-0 left-0">
                {open ? <XIcon className='w-10 h-10'></XIcon> : <MenuIcon className='w-10 h-10  '></MenuIcon>}
            </div>
            {/* humbarger end  */}

            {/* all menu start  */}
            <div className={`navbar transition-all duration-200 flex justify-between items-center sm:px-24  md:h-[80px]  sm:mt-0 ${open?'mt-[0]':'mt-[-150px]'}`}  >

                {/* logo start  */}
                <div className='hidden sm:block' >
                    <Link className='font-bold uppercase text-3xl font-mono text-indigo-300 hover:text-white' to={'/'}> Nakon Agency</Link>
                </div>
                {/* logo end  */}


                {/* nav start  */}
                <div className='mx-auto md:mx-0 text-center'>
                    <nav className="nav flex flex-col md:flex-row md:ml-2">
                        <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/'}></CustomLink>
                        <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/home'}>Home</CustomLink>
                        <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/reviews'}>Reviews</CustomLink>
                        <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/dashboard'}>Dashboard</CustomLink>
                        <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/blog'}>Blog</CustomLink>
                        <CustomLink className='ml-3 font-semibold text-indigo-300 uppercase hover:text-white' to={'/about'}>About</CustomLink>
                    </nav>
                </div>
                {/* nav end  */}
            </div>
            {/* all menu end     */}
        </div>
    );
};

export default Header;