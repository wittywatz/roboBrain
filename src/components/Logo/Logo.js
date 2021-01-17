import React from 'react';
import Tilt from 'react-tilt';
import brain from "./brain.png"
import "./Logo.css";

const Logo = () =>{
	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt" options={{ max : 90, reverse : true }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"><img className="brainLogo" src={brain} alt={'logo'}/>RoboBrain</div>
			</Tilt>

		</div>
	);	
};

export default Logo;