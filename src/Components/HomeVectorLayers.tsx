import React from 'react'

import {    Circle, 
            Polyline,
            Rectangle, 
            Popup, 
            LayerGroup, 
            FeatureGroup, 
            LayersControl,
            Marker } from 'react-leaflet'
import { useState } from 'react'

import TrailerParkTitle from './TrailerParkTitle'
import HomePopup from './HomePopup'

function HomeVectorLayers() {

    const [trailerParkCenter] = useState({latitude: 53.9177, longitude:-122.64179})
    const [gasStations] = useState({ stores: [
        {la:53.92128,lo:-122.6483},
        {la:53.90608,lo:-122.67687}
    ]})
    //la = latitude; lo = longitude
    //tpS stands for trailer park square
    //crnrs = corners
    const [tpS] = useState({ crnrs: [
        {la:53.91995,lo:-122.6411},
        {la:53.91681,lo:-122.64278}
    ]})
    //tpP stands for trailer park polyline
    //rd = road
    const [tpP] = useState({rd: [
        {la:53.9195,lo:-122.64212},
        {la:53.91752,lo:-122.64213},
        {la:53.91751,lo:-122.64138},
        {la:53.91893,lo:-122.64135} 
    ]})

    const fillBlueOption = { fillColor: 'blue' }
    const fillBlackOption = { fillColor: 'black' }
    const limeOptions = { color: 'lime' }
    const purpleOptions = { color: 'purple' }

    return (
        <div>
            <LayersControl position="topright">

                <LayersControl.Overlay checked name="Layer of Trailer Park">
                    <LayerGroup>
                        <Polyline 
                            pathOptions={limeOptions}
                            positions={[
                                [tpP.rd[0].la, tpP.rd[0].lo],
                                [tpP.rd[1].la, tpP.rd[1].lo],
                                [tpP.rd[2].la, tpP.rd[2].lo],
                                [tpP.rd[3].la, tpP.rd[3].lo]
                            ]} />
                        <Rectangle
                            pathOptions={fillBlackOption}
                            bounds={[
                                [tpS.crnrs[0].la,tpS.crnrs[0].lo],
                                [tpS.crnrs[1].la,tpS.crnrs[1].lo]
                            ]} />
                        <TrailerParkTitle />
                        <HomePopup />
                    </LayerGroup>
                </LayersControl.Overlay>

                <LayersControl.Overlay checked name="Layer of Gas Stations">
                    <FeatureGroup>
                        <Circle
                        center={[gasStations.stores[0].la, gasStations.stores[0].lo]}
                        pathOptions={purpleOptions} radius={100}>
                            <Popup>
                                Airport Husky
                            </Popup>
                        </Circle>
                        <Circle
                        center={[gasStations.stores[1].la, gasStations.stores[1].lo]}
                        pathOptions={purpleOptions} radius={100}>
                            <Popup>
                                Petro Canada
                            </Popup>
                        </Circle>
                    </FeatureGroup>
                </LayersControl.Overlay>

            </LayersControl>

            
            

        </div>
    )
}

export default HomeVectorLayers
