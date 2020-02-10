import React from "react";
import "bulma/css/bulma.css";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map(){
    return <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat: 44.943722, lng: 93.094276}} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default function Coffee() {

return (
<div className="coffee-map font-effect-neon">
    <p>Coffee</p>
    <WrappedMap googleMapURL = {`"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"`}/>
</div>
    )
}