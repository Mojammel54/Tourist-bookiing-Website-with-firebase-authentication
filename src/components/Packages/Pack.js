import React from 'react';
import { useNavigate } from 'react-router-dom';


const Pack = ({ singleData }) => {
    const { id } = singleData
   
    const navigate = useNavigate()
    const details = () => {

        navigate(`/single/${id}`)


    }

    return (


        <button onClick={details}>

            <div>
                <div className="card w-72  ml-5 mt-12 hover:animate-pulse ">
                    <figure><img className='relative' src={singleData.urlimg} alt="car!" /></figure>
                    <div className="card-body absolute left-8 ">
                        <h2 className="card-title mx-auto text-2xl font-semibold text-orange-600">{singleData.name}</h2>
                    </div>
                </div>
            </div>
        </button>

    );
};

export default Pack;