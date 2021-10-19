import React, { useEffect, useState } from 'react';
import './Servises.css'
import Service from '../Service/Service';
const Serveses = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Farhadcode/doctor-portal-data/main/data/data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // services.json
    return (


        <div id="services">
            <h2 className="text-center mt-5">Our Services</h2>
            <div className="service-container">


                {
                    service.map(service => <Service
                        key={service.Id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Serveses;