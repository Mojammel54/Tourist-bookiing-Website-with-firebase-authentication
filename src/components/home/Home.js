import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pack from '../Packages/Pack';


import './Home.css'
import img1 from './img1.png'
const Home = () => {
    const data = useLoaderData()

    return (

        <div>
            <img className='absolute w-full h-[88.5%]' src={img1} alt="" />
            <h1 className='relative text-6xl text-orange-500 font-bold'>Welcome to Beach-view</h1>

            {
                data.map(singleData => <Pack key={singleData.id} singleData={singleData}></Pack>)

            }




        </div>
    );
};

export default Home;