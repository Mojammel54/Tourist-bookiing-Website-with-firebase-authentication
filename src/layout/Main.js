import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, } from '../components/Navbar/Header';

export const TourContext = createContext({})
const Main = () => {
    const [value, onChange] = useState(new Date());
    const [place, setPlace] = useState('')
    const [tour, setTour] = useState([])
    const [travelDate, setDate] = useState()

    return (
        <div>

            {

                <TourContext.Provider value={{ value, place, onChange, tour, setTour, setPlace, setDate, travelDate }}>
                    <Header></Header>
                    <Outlet></Outlet>
                </TourContext.Provider>

            }


        </div>
    );
};

export default Main;