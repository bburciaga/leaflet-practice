import React from 'react';
import './App.css';

import { MapContainer, TileLayer } from 'react-leaflet';
import HomeVectorLayers from './Components/HomeVectorLayers';
import AnimatedPanning from './Components/AnimatedPanning';
import LatLngDisplay from './Components/LatLngDisplay';

// App for app

function App() {
  return (
    <div className="App mapid">
      <LatLngDisplay />
    </div>
    
  );
}

export default App;
