import React, { useRef } from 'react'
import { useMapEvent } from 'react-leaflet'

function SetViewOnClick({ animateRef }) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    })

    return null
}

function AnimatedPanning() {

    const animateRef = useRef(false)

    return (
        <div>
            <p>
                <label>
                    <input
                        type="checkbox"
                        onChange= {() => {
                            animateRef.current = !animateRef.current
                        }}
                    />
                    Animate panning
                </label>
            </p>
            <SetViewOnClick animateRef={animateRef} />
        </div>
    )
}

export default AnimatedPanning
