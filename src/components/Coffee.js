import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "bulma/css/bulma.css";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map(){
    return <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat: 44.943722, lng: 93.094276}} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 44.953705, lng: 93.089958 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Coffee() {
  return (
    <div className="coffee-map font-effect-neon">
      <p>Coffee</p>
      {/* <WrappedMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBcsej_hCDf00etoKPKBacajuaCXL9jC0o'}
        loadingElement={<div style={{height: "100%"}}/>}
        containerElement={<div style={{height: "100%"}}/>}
        mapElement={<div style={{height: "100%"}}/>}


<<<<<<< HEAD
return (
<div className="coffee-map font-effect-neon">
    <p>Coffee</p>
    <WrappedMap googleMapURL = {`"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"`}/>
</div>
    )
}
=======
      /> */}
    </div>
  );
}
>>>>>>> 69c12f67e21a83db0b7525655087bc95e4fab17c
