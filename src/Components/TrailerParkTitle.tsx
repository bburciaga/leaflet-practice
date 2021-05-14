import React from 'react'

import { SVGOverlay } from 'react-leaflet'
import { useState } from 'react'

function TrailerParkTitle() {

    const [textboxBounds] = useState({crnrs: [
        {la:53.91952,lo:-122.63984},
        {la:53.91823,lo:-122.63731}
    ]})

    return (
        <SVGOverlay attributes={{ stroke: 'red' }} 
            bounds={[
                [textboxBounds.crnrs[0].la,textboxBounds.crnrs[0].lo],
                [textboxBounds.crnrs[1].la,textboxBounds.crnrs[1].lo]
            ]}>
            <rect x="0" y="0" width="100%" height="100%" fill="blue" />
            <circle r="5" cx="10" cy="10" fill="red" />
            <text x="0%" y="50%" stroke="white">
                Crown Parks Home
            </text>
        </SVGOverlay>
    )
}

export default TrailerParkTitle
