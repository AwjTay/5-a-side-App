import React from "react";

const Thermometer = ({xp}) => (xp ? <div className="temp" style={{width : `${xp/2}vw`}}></div> : <div className="thermobase"></div>);

export default Thermometer;
