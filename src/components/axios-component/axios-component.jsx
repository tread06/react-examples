import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './axios-component.css'

const axios = require('axios');

// https://api.wheretheiss.at/v1/satellites/25544


const AxiosComponent = () => {

  //const[isLoading, setIsLoading] = useState(true);
  const[data, setData] = useState(null);  
  const[requestTime, setRequiestTime] = useState(new Date(Date.now())); 
  

  useEffect(() => {      
    //axios get requirest to find the ISS location
    axios.get('https://api.wheretheiss.at/v1/satellites/25544')
    .then(function (response) { 
      setData(response.data);      
      setRequiestTime(new Date(Date.now()));
    })
    .catch(function (error) {      
      console.log(error);
    })
    .then(function () {
      // always executed      
    });
  }, []);

  return (

    <div>
      <h1 className='component-title'>Axios: International Space Station Tracker</h1>
      <p>
        An example of using Axios to fetch data from an API. Map is rendered using Leaflet.
      </p>  
      {data && 
        <MapContainer center={[34.4, -23.9]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[34.4, -23.9]}>
          <Popup className='axios-popup'>
            International Space Station <br /> {requestTime.toLocaleString()} <br /> Altitude: {(Math.round(data.altitude * 100) / 100) + " " +data.units }
          </Popup>
        </Marker>
      </MapContainer>
      }      
    </div>    
  );
}

export default AxiosComponent;
