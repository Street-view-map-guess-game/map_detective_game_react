import React, { useState, useEffect } from "react";

function Compass({ panorama }) {
    const [heading, setHeading] = useState(panorama.getPov().heading);
    const [direction, setDirection] = useState("East");

    useEffect(() => {
        const povChangeListener = window.google.maps.event.addListener(panorama, 'pov_changed', function () {
            const pov = panorama.getPov();
            setHeading(pov.heading);

            if (pov.heading >= 315 || pov.heading < 45) {
                setDirection("East");
            } else if (pov.heading >= 45 && pov.heading < 135) {
                setDirection("North");
            } else if (pov.heading >= 135 && pov.heading < 225) {
                setDirection("West");
            } else if (pov.heading >= 225 && pov.heading < 315) {
                setDirection("South");
            }
        });

        return () => {
            window.google.maps.event.removeListener(povChangeListener);
        };
    }, [panorama]);

    const compassRotation = `rotate(${heading}deg)`;

    return (
        <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 9999 }}>
            <i className="fa fa-compass" style={{ fontSize: 40, transform: compassRotation }}>{direction}</i>
        </div>
    );
}

export default Compass;
