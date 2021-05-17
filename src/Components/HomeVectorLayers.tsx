import React from 'react'

import {    Circle, 
            Polyline,
            Rectangle, 
            Popup, 
            LayerGroup, 
            FeatureGroup, 
            LayersControl, 
            useMap} from 'react-leaflet'
import { useState } from 'react'

import TrailerParkTitle from './TrailerParkTitle'
import { HomePopup, GasStationPopups } from './PrinceGeorgePopups'
import { useMemo } from 'react'

function HomeVectorLayers() {

    //la = latitude; lo = longitude
    //tpS stands for trailer park square
    //crnrs = corners
    const [tpS] = useState({ crnrs: [
        {la:53.91995,lo:-122.6411},
        {la:53.91681,lo:-122.64278}
    ]})
    const [outertpS] = useState({ crnrs: [
        {la:53.91999,lo:-122.64219},
        {la:53.91667,lo:-122.64385}
    ]})

    const [bounds, setBounds] = useState(outertpS)
    const map = useMap()

    const innerHandlers = useMemo(
        () => ({
            click() {
                setBounds(outertpS)
                map.fitBounds([
                    [outertpS.crnrs[0].la,outertpS.crnrs[0].lo],
                    [outertpS.crnrs[1].la,outertpS.crnrs[1].lo]
                ])
            },
        }),
        [map],
    )

    const [locations] = useState({ stores: [
        {la:53.89658,lo:-122.64176},
        {la:53.90691,lo:-122.72378}
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
                            eventHandlers={innerHandlers}
                            bounds={[
                                [tpS.crnrs[0].la,tpS.crnrs[0].lo],
                                [tpS.crnrs[1].la,tpS.crnrs[1].lo]
                            ]} />
                        <TrailerParkTitle />
                    </LayerGroup>
                </LayersControl.Overlay>

                <LayersControl.Overlay checked name="Layer of Locations">
                    <FeatureGroup>
                        <Circle
                        center={[locations.stores[0].la, locations.stores[0].lo]}
                        pathOptions={purpleOptions} radius={100}>
                            <Popup>
                                Blackburn Skatepark
                            </Popup>
                        </Circle>
                        <Circle
                        center={[locations.stores[1].la, locations.stores[1].lo]}
                        pathOptions={purpleOptions} radius={100}>
                            <Popup>
                                LG Gunn Park
                            </Popup>
                        </Circle>
                    </FeatureGroup>
                </LayersControl.Overlay>
                
                <LayersControl.Overlay checked name="Layer of Gas Station Popups">
                    <GasStationPopups />
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Layer of Current Position">
                    <HomePopup />
                </LayersControl.Overlay>
            </LayersControl>

            
            

        </div>
    )
}

export default HomeVectorLayers
