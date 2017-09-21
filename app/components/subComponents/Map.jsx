import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

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
    
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 41.9, lng: -87.624
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
         
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();
          console.log(`our props are ${this.props.endAddress}`)
          console.log('this is happening', places[0].geometry.viewport)
          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          //on places changed
          //figure out how to get lat and long
          //after place changed - invoke route method with new lat and loung
          //can use internal variable - route will update directions prop
          // refs.map.fitBounds(bounds);const DirectionsService = new google.maps.DirectionsService();
          let startLong = places[0].geometry.viewport.b.b;
          let startLat = places[0].geometry.viewport.f.b;
          
          const DirectionsService = new google.maps.DirectionsService();
          console.log(`here is the coords long ${endLong} and lat ${endLat}`)
          DirectionsService.route({
            origin: new google.maps.LatLng(startLat, startLong),
            destination: new google.maps.LatLng(this.props.endAddress[0], this.props.endAddress[1]),
            travelMode: google.maps.TravelMode.WALKING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        },
      })
    },
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      
      DirectionsService.route({
        origin: new google.maps.LatLng(40.750572, -73.976417),
        destination: new google.maps.LatLng(40.747215, -73.984647),
        travelMode: google.maps.TravelMode.WALKING,
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
)(function(props) {
  return (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(51.5033640, -73.9764010)}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Starting point:"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}
  </GoogleMap>
  )
});
//not full magic mode - look up the new syntax


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
