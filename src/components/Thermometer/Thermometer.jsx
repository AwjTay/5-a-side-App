import React, {Fragment } from "react";

const Thermometer = ({xp}) => (xp ? <div className="temp" style={{height : `${xp/2}vh`}}></div> : <div className="thermobase"></div>);

export default Thermometer;
