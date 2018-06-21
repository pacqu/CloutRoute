import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
))

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
// import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// const GOOGLE_API_KEY = 'AIzaSyD3_GHmb4k7sKXq9hQ9nOtJYCwZ_IhmGP8';
//
//
// export class MapContainer extends Component {
//   render() {
//       return (
//         <Map google={this.props.google} zoom={14}>
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />
//           <InfoWindow onClose={this.onInfoWindowClose}>
//               <div>
//                 <h1>{this.state.selectedPlace.name}</h1>
//               </div>
//           </InfoWindow>
//         </Map>
//       );
//     }
// }
//
// export default GoogleApiWrapper({
//   apiKey: (GOOGLE_API_KEY)
// })(MapContainer)
//
//
//
//
//
//
//
//
//
//
//
//
// // const googleMapsClient = require('@google/maps').createClient({
// //   key: GOOGLE_API_KEY
// // });
// //
// // googleMapsClient.geocode({
// //   address: '1600 Amphitheatre Parkway, Mountain View, CA'
// // }, function(err, response) {
// //   if (!err) {
// //     console.log(response.json.results);
// //   }
// // });
// //
// // // const GoogleMap = ({map}) =>{
// // //   if (!map){
// // //     return <div> Loading map...</div>
// // //   }
// // //
// // //
// // // }
// // //
// // // export default GoogleMap
