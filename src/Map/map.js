import React, { Component } from 'react';
import ReactStreetview from 'react-streetview';
import '../styles/mapstyle.css';
// import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

class Map extends Component {
    render() {
        const googleMapsApiKey = 'AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A';
        const streetViewPanoramaOptions = {
            position: { lat: 46.9171876, lng: 17.8951832 },
            pov: {
                heading: 34,
                pitch: 10
            },
            disableDefaultUI: true,
            showRoadLabels: false,
        };

        return (
            <div>
                <div className='streetviewdiv'>
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={streetViewPanoramaOptions}
                    />
                </div>
            </div>

        );
    }
}

export default Map;