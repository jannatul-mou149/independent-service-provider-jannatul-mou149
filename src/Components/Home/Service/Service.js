import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h4 className='mt-5 fw-bold'>{name}</h4>
            <p>Price: {price} Tk</p>
            <p><small>{description}</small></p>
            <Link to="/checkout">
                <button className='btn btn-primary'>Book Now</button>
            </Link>
        </div>
    );
};

export default Service;