import React from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useState } from 'react'

function HomePopup() {
    const [position, setPosition] = useState({latitude: 0, longitude: 0})
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            const { lat, lng } = e.latlng
            setPosition({
                latitude: lat,
                longitude: lng,
            })
            map.flyTo(e.latlng, map.getZoom())
        },
    })

//53 -122
    /*
    return (
        position.latitude !== 0 ?
        <Marker
            position={[position.latitude, position.longitude]}>
            <Popup>
                You are here
            </Popup>
        </Marker>
        
        :null
    )
    */
    return (
        
        <Marker
            position={[53.91818, -122.64218]}>
            <Popup>
                You are here
            </Popup>
        </Marker>
    )
}

export default HomePopup
