import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, price, img } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3 className='mt-5'>{name}</h3>
            <p>Price: {price} Tk</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;