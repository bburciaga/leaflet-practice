import React, { useState, useCallback } from 'react'
import { useEffect } from 'react'

const center = [ 53.91836, -122.64722 ]
const zoom = 13

function DisplayPosition( { map } ) {
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
            lattitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button onClick={onClick}>reset</button>
        </p>
    )
}

function ExternalState() {

    const [map, setMap] = useState(null)

    return (
        <div>
            {map ? <DisplayPosition map={map} /> : null}
        </div>
    )
}

export default ExternalState
