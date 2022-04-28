import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MyContext } from '../../App';
import banner from '../../Media/image/job.png'
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const conextValue = useContext(MyContext);
    const latestReview = conextValue.slice(-3);
    
    return (
        <div>
            <section className='grid md:grid-cols-[3fr,2fr] grid-cols-1 gap-10 px-10 xs:px-16 md:px-24  '>
                <div className="hero-section-left xs:h-[35vh] sm:h-[90vh] flex flex-col justify-center order-2 sm:order-1 text-center sm:text-left">
                    <h1 className='text-3xl md:text-6xl font-bold uppercase mt-2'>Everything Is Easy </h1>
                    <h1 className='text-3xl md:text-6xl font-bold uppercase mt-2'>When You Are Crazy </h1>
                    <p className='mt-6 font-medium text-gray-500'>Everything is easy if you are crazy . Nothing will be easy if you ara lazy . You can do it anything , just believe in your self , Why Not Why Not You Why Not NowYou should be have a vision in your life .let's starded.</p>
                    <div>
                        <button  className='border px-4  py-3 rounded-md mt-5 bg-[#1B1464] text-white hover:text-indigo-300 font-semibold uppercase'><Link to={'/about'}>Live Demo</Link></button>
                    </div>

                </div>
                <div className="banner-image order-1 sm:order-2 h-[vh] md:h-[90vh] flex flex-col justify-center ">
                    <img src={banner} alt="" />
                </div>
            </section>
            <section>
                <div className='title text-center capitalize text-2xl font-bold mt-6'>customer reviews ({conextValue.length})</div>
                <div className="latest-reviews mt-10">
                    <div className="review grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6  px-10 md:px-16">
                        {
                            latestReview.map(latest => <ReviewCard key={latest.id} review={latest}></ReviewCard>)
                        }
                    </div>
                </div>
                <div className='text-center mt-10'>
                    <Link to={'/reviews'} className='border px-4  py-3 rounded-md mt-5 bg-[#1B1464] text-white  hover:text-indigo-300 font-medium capitalize'>see all reviews</Link>
                </div>

            </section>
        </div>
    );
};

export default Home;