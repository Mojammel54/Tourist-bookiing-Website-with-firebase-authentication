import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TourContext } from '../../layout/Main';
import BookDetails from '../BookDetails/BookDetails';


const Book = () => {


    const info = useContext(TourContext)
    const { value, place, tour, setTour, setPlace, travelDate } = info
    console.log(tour)

    console.log(value.activeStartDate)




    const data = useLoaderData();


    return (
        <div className='grid grid-cols-3 '>

            <div className='mt-32'>
                {

                    data.map(ht => <BookDetails key={ht.id} data={ht}></BookDetails>)

                }
            </div>

            <div className='text-3xl'>
                <h1 className='font-bold text-red-500 shadow-2xl'>Your Destination</h1>
                <h1 className='font-semibold  text-red-500 shadow-2xl'> From:{place} To:{tour.name}</h1>
                <h2 className=' text-red-500 shadow-2xl'>Date :{travelDate}</h2>
            </div>
            <div>
                <div className="mapouter"><div className="gmap_canvas mt-40"><iframe width="400" height="700" id="gmap_canvas" src="https://maps.google.com/maps?q=coxbazar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><Link to="https://2piratebay.org">pirate bay</Link><Link to="https://www.embedgooglemap.net">google maps generator</Link></div></div>

            </div>


        </div>
    );
};

export default Book;