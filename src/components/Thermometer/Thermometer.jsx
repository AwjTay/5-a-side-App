import React from "react";

//interpolates team experience value as width of 'temperature' div

const Thermometer = ({xp}) => (xp ? <div className="temp" style={{width : `${xp/2}vw`}}></div> : <div className="thermobase"></div>);

export default Thermometer;
