import React, { createContext, useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';




import "react-datepicker/dist/react-datepicker.css";

import { TourContext } from '../../layout/Main';


const Singlepage = ({ children }) => {
    const data = useContext(TourContext)
    const {  setTour, setPlace, setDate } = data




    const tourdata = useLoaderData()


    const navigate = useNavigate()

    const book = (event) => {
        event.preventDefault()
        const from = event.target
        const destination = from.from.value
        setPlace(destination)
        setTour(tourdata)
        navigate('/book')







    }

    const date = (event) => {


        const date = event.target.value
        setDate(date)


    }
    






    // const contextData = { value, tourdata, place }


    return (





        <div className='flex align-middle'>
            <div >
                <img className=' mt-8 ml-24 relative' src={tourdata.urlimg} alt="" />
                <h1 className='absolute'>{tourdata.name}</h1>
            </div>
            <form onSubmit={book} className='ml-48 mt-5 border shadow-inner shadow-red-700 h-60 w-full'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            {/* <h1 className='font-bold text-red-900 mb-10'>Select Yout Journey date</h1> */}

                            {/* <Calendar onChange={onChange} value={value} /> */}
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">From</span>
                                    </label>
                                    <input type="text" placeholder="From" name='from' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input type="text" placeholder="To" readOnly defaultValue={tourdata.name} className="input input-bordered" />

                                </div>
                                <div onBlur={date} className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" placeholder="date" name='date' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>




        </div>


    );
};

export default Singlepage;