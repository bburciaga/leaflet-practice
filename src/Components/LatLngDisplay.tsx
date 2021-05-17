import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import HomeVectorLayers from './HomeVectorLayers';
import AnimatedPanning from './AnimatedPanning';

const center = [53.91836, -122.64722]
const zoom = 13

function DisplayPosition({ map }) {
  const [position, setPosition] = useState(map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <button onClick={onClick}>reset</button>
    </p>
  )
}

function LatLngDisplay() {
    
    const [map, setMap] = useState<any>(null)
    
    const displayMap = useMemo(
        () => (
          <MapContainer
            center={[53.91836, -122.64722]}
            zoom={zoom}
            scrollWheelZoom={false}
            whenCreated={setMap}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AnimatedPanning />
            <HomeVectorLayers />
          </MapContainer>
        ),
        [],
      )

    return (
        <div>
            {map ? <DisplayPosition map={map} /> : null}
            {displayMap}
        </div>
    )
}

export default LatLngDisplay
