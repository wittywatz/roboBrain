import React from 'react';
// import "./FaceRecognition.css";

const FaceRecognition = ({imageUrl}) => {
	return(
		<div className="center mt2">
			<img alt="" src={imageUrl} width="600"/>
		</div>

	);
};

export default FaceRecognition; 