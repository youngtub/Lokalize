import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    directions: 'walking'
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(40.750572, -73.976417),
        destination: new google.maps.LatLng(40.747215, -73.984647),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(51.5033640, -73.9764010)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

// class Map extends React.Component {
//   constructor(props) {
//     super(props);
//     this.setState = {
//       googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//       loadingElement: <div style={{ height: `100%` }} />,
//       containerElement: <div style={{ height: `400px` }} />,
//       mapElement: <div style={{ height: `100%` }} />,
//       originLat: 51.5033640,
//       originLong: -73.9764010,
//       destinationLat: 40.7470030,
//       destinationLong: -73.9846790,
//       directions: null
//     }
//   };
 
//   componentDidMount() {
//     const Directions = new google.maps.DirectionsService();

//     Directions.route({
//       origin: new google.maps.LatLng(this.state.originLat, this.state.originLong),
//       destination: new google.maps.LatLng(this.state.destinationLat, this.state.destinationLong),
//       travelMode: google.maps.TravelMode.DRIVING,
//     }, (res, status) => {
//       if (status === google.maps.DirectionsStatus.OK) {
//         this.setState({
//           directions: result
//         });
//       } else {
//         console.error(`error fetching directions ${result}`);
//       }
//     });
//   }
//   render() {



//     return (
//       <GoogleMap
//         defaultZoom={7}
//         defaultCenter={new google.maps.LatLng(this.state.originLat, this.state.originLong)}
//       >
//         {props.directions && <DirectionsRenderer directions={this.state.directions} />}
//       </GoogleMap>
//     )
//   }
// };

export default MapWithADirectionsRenderer;