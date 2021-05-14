import React from 'react';
import './App.css';

import { MapContainer, TileLayer } from 'react-leaflet';
import HomePopup from './Components/HomePopup';
import HomeVectorLayers from './Components/HomeVectorLayers';
import TrailerParkTitle from './Components/TrailerParkTitle';

function App() {
  return (
    <div className="App mapid">
      <MapContainer center={[53.91836, -122.64722]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <HomeVectorLayers />
      </MapContainer>
    </div>
    
  );
}

export default App;
