import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowRight, FaGoogleWallet, FaSpaceShuttle } from 'react-icons/fa';
import './home.css'
import useTitle from '../../hook/useTitle';
import UserBooking from './AllBooking/UserBooking';
import AllProductImg from './All product img/AllProductImg';
import Revewsproduct from './reviews/Reviewsproduct';

const Home = () => {

    const [bannerImage, setBannerImage] = useState();
    useEffect(() => {
        fetch('servicess.json')
            .then(res => res.json())
            .then(data => setBannerImage(data))

    }, [])
    // console.log(bannerImage);
    // ----Slider all image-----
    const [sliderImag, setImag] = useState([]);

    useEffect(() => {
        fetch('allimage.json')
            .then(res => res.json())
            .then(data => setImag(data))
    }, [])
    // console.log(sliderImag)

    return (
        <>

            {/* ----------------All Car Booking section----------------- */}

            <section className='bg-gray-200 py-[30px]'>
                <UserBooking></UserBooking>
            </section>
            <section className='dark:bg-gray-800 py-[30px] mb-2'>
                <AllProductImg></AllProductImg>
                <Revewsproduct></Revewsproduct>
            </section>



        </>
    );
};

export default Home;