import React, { useEffect, useState } from 'react';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-secondary text-center mt-5'> Our Services</h1>
                <div>
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default Service;