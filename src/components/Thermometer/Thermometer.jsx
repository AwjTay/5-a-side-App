import React, {Fragment } from "react";

const Thermometer = ({xp}) => {

	switch(xp) {
		case 1 :
			return <div className="temp1"></div>
		case 2 :
			return <div className="temp2"></div>
		case 3 :
			return <div className="temp3"></div>
		case 4 :
			return <div className="temp4"></div>
		case 5 :
			return <div className="temp5"></div>
		case 6 :
			return <div className="temp6"></div>
		case 7 :
			return <div className="temp7"></div>
		case 8 :
			return <div className="temp8"></div>
		case 9 :
			return <div className="temp9"></div>
		case 10 :
			return <div className="temp10"></div>
		case 11 :
			return <div className="temp11"></div>
		case 12 :
			return <div className="temp12"></div>
		case 13 :
			return <div className="temp13"></div>
		case 14 :
			return <div className="temp14"></div>
		case 15 :
			return <div className="temp15"></div>
		case 16 :
			return <div className="temp16"></div>
		case 17 :
			return <div className="temp17"></div>
		case 18 :
			return <div className="temp18"></div>
		case 19 :
			return <div className="temp19"></div>
		case 20 :
			return <div className="temp20"></div>
		case 21 :
			return <div className="temp21"></div>
		case 22 :
			return <div className="temp22"></div>
		case 23 :
			return <div className="temp23"></div>
		case 24 :
			return <div className="temp24"></div>
		case 25 :
			return <div className="temp25"></div>
		case 26 :
			return <div className="temp26"></div>
		case 27 :
			return <div className="temp27"></div>
		case 28 :
			return <div className="temp28"></div>
		case 29 :
			return <div className="temp29"></div>
		case 30 :
			return <div className="temp30"></div>
		case 31 :
			return <div className="temp31"></div>
		case 32 :
			return <div className="temp32"></div>
		case 33 :
			return <div className="temp33"></div>
		case 34 :
			return <div className="temp34"></div>
		case 35 :
			return <div className="temp35"></div>
		case 36 :
			return <div className="temp36"></div>
		case 37 :
			return <div className="temp37"></div>
		case 38 :
			return <div className="temp38"></div>
		case 39 :
			return <div className="temp39"></div>
		case 40 :
			return <div className="temp40"></div>
		case 41 :
			return <div className="temp41"></div>
		case 42 :
			return <div className="temp42"></div>
		case 43 :
			return <div className="temp43"></div>
		case 44 :
			return <div className="temp44"></div>
		case 45 :
			return <div className="temp45"></div>
		case 46 :
			return <div className="temp46"></div>
		case 47 :
			return <div className="temp47"></div>
		case 48 :
			return <div className="temp48"></div>
		case 49 :
			return <div className="temp49"></div>
		case 50 :
			return <div className="temp50"></div>
		default: 
			return <div className="thermobase temp"></div>					
	} 
		
	
}

export default Thermometer;

//now you've 'just' got to style it. Remember flex direction column 
//reverse to get it in the right order - don't waste too much time looking for colour
//gradients either - just get the fucker working