import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?js?key=AIzaSyDr724XMs6KXbpDXTwibIe8Vq8R-wWN_TU&v=3.exp&libraries=geometry",
    loadingElement: <div style={{}} />,
    containerElement: (
      <div
        style={{
          bottom: 5,
          right: 5,
          height: "200px",
          width: "300px",
          position: "absolute",
          zIndex: 1000,
        }}
      />
    ),
    mapElement: (
      <div
        style={{
          width: "300px",
          height: "200px",
          borderRadius: "10px",
          zIndex: 10,
        }}
      />
    ),
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    options={{ disableDefaultUI: true }}>
    {props.isMarkerShown && <div></div>}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default MyFancyComponent;
