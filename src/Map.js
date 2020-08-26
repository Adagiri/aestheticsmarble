import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Spinner from "./Spinner";

const mapStyles = {
  width: "100vw",
  height: "60vh",
};

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      <Marker position={{ lat:  47.444, lng: -122.0 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAXkb9nF3d9HPzcoPw_mpbok7_p3v0eAEw",
  LoadingContainer: Spinner
})(MapContainer);
