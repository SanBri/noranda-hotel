import { GoogleMap, LoadScript } from "@react-google-maps/api";

// Define the container style for the map
const containerStyle = {
  width: "99%",
  height: "70rem",
};

// Define the initial center of the map
const center = {
  lat: 43.92697506033972,
  lng: 2.142475166380449,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey='AIzaSyCPvfyhXX_ocb7obJdFgHzha9vVaU-VnLk'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          maxZoom: 18,
          minZoom: 7,
        }}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
