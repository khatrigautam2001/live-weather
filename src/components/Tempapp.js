import React from 'react';
import { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");
    
    useEffect( () => {
        const fetchApi = async () => {
            const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
            const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.main);
            setCity(resJson.main);
        }
        
        fetchApi();
    })
    return (
        <>
            <div className="box">
                <div className="input_data">
                    <input type="search" className="input_field" placeholder="Enter the City" value={search} onChange={(event) => { setSearch (event.target.value)}} />
                </div>

                {!city ? (<p style={{fontSize:"30px"}}>No Data Found..</p>) : (
                    <>
                            <div className="info">
                                <h2 className="location" style={{fontSize:"50px", textTransform:"capitalize"}}>
                                <i className="fas fa-street-view"></i> {search}
                            </h2>
                            <h1 className="location" style={{fontSize: "28px"}}>
                                {city.temp}° Cel 
                            </h1>
                            <h3 className="temp_min_max" style={{fontSize: "17px", color:"#888"}}>Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel</h3>
                            </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                    </>
                    ) }
            
            
            </div>

        </>
    )
};

export default Tempapp;