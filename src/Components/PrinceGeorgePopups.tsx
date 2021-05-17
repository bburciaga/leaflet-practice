import React from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useState } from 'react'

function GasStationPopups() {
    const [gasStations] = useState({ stores: [
        {la:53.92128,lo:-122.6483},     //Airport Husky
        {la:53.90608,lo:-122.67687}     //Petro Canada
    ]})

    return (
        <div>
            <Marker
                position={[gasStations.stores[0].la,gasStations.stores[0].lo]}>
                <Popup>
                    Airport Husky
                </Popup>
            </Marker>
            <Marker
                position={[gasStations.stores[1].la,gasStations.stores[1].lo]}>
                <Popup>
                    Petro Canada
                </Popup>
            </Marker>
        </div>
        
    )
}

function HomePopup() {
    /*
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
       null
   )
}

export {
    HomePopup,
    GasStationPopups
}
