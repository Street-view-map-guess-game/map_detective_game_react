import React, { useState, useEffect } from "react";

import compassNeddle from "../assets/images/pageImage/404error/compass_neddle.png"

function Compass({ panorama }) {
    const [heading, setHeading] = useState(panorama.getPov().heading);
    const [isRotating, setIsRotating] = useState(false);

    useEffect(() => {
        const povChangeListener = window.google.maps.event.addListener(
            panorama,
            "pov_changed",
            function () {
                const pov = panorama.getPov();
                setHeading(pov.heading);
            }
        );
        return () => {
            window.google.maps.event.removeListener(povChangeListener);
        };
    }, [panorama]);

    const compassRotation = `rotate(${heading}deg)`;

    const handleMouseDown = (event) => {
        setIsRotating(true);
    };

    const handleMouseUp = (event) => {
        setIsRotating(false);
    };

    // basılı tutma ile
    const handleMouseMove = (event) => {
        if (isRotating) {
            const compass = event.currentTarget;
            const rect = compass.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const clickX = event.clientX;
            const clickY = event.clientY;
            const deltaX = clickX - centerX;
            const deltaY = centerY - clickY;
            const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
            const newHeading = -(angle - 90);

            setHeading(newHeading);

            const pov = panorama.getPov();
            pov.heading = newHeading;
            panorama.setPov(pov);
        }
    };
    //tek tıklama ile 
    const handleCompassClick = (event) => {
        const compass = event.currentTarget;
        const rect = compass.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const clickX = event.clientX;
        const clickY = event.clientY;
        const deltaX = clickX - centerX;
        const deltaY = centerY - clickY;
        const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
        const newHeading = -(angle - 90);

        setHeading(newHeading);

        const pov = panorama.getPov();
        pov.heading = newHeading;
        panorama.setPov(pov);
    };
    // pusula resminin sürüklenmesini engeller
    function handleDragStart(event) {
        event.preventDefault();
    }

    return (
        <div
            style={{
                position: "absolute",
                top: 80,
                right: 25,
                fontSize: 80,
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onClick={handleCompassClick}
        >

            <div
                style={{
                    userSelect: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
            </div>
            <img
                src={compassNeddle}
                alt="compass needle"
                width="100"
                height="100"
                style={{ transform: compassRotation }}
                onDragStart={handleDragStart}
            />
        </div>
    );
}

export default Compass;
