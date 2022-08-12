import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBRvg2gpdDkIicpwOYMCr_RcfwPF5D9ghA",
  });

  if (!isLoaded) return <h1>is Loadind...</h1>;
  return <Map></Map>;
};
function Map() {
  const center = useMemo(() => ({ lat: 25.633, lng: -100.282}), []);
  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <Marker position={{ lat: 25.633, lng: -100.282 }}></Marker>
    </GoogleMap>
  );
}

export default Maps;
