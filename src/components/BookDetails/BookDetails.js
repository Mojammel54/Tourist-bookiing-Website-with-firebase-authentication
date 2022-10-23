import React from 'react';

const BookDetails = ({ data }) => {
  
    return (
        <div>
            <div>
                <div className="card w-72  ml-5 mt-12 hover:animate-pulse ">
                    <figure><img className='relative' src={data.picture} alt="car!" /></figure>
                    <div className="card-body absolute left-8 ">
                        <h2 className="card-title mx-auto text-1xl font-semibold text-orange-600 ml-8 mt-8">{data.price} Taka</h2>
                        <h2 className="card-title mx-auto text-1xl font-semibold text-orange-600 ">{data.name}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;