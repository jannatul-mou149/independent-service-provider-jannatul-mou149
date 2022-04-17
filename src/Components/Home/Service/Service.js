import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div className='service'>
            <img className='service-image' src={img} alt="" />
            <div className='p-4'>
                <h4>{name}</h4>
                <p>Price: {price} Tk</p>
                <p><small>{description}</small></p>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;