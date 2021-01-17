import React from 'react';
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onSubmit}) => {
	return(
		<div className="">
			<p className="f3">
				{`This magic brain will detect faces in your pictures, Give it a try`} 
			</p>
			<div className="center">
				<div className="inputtext form center shadow-5 pa4 br3">
					<input type={"text"} className="f4 pa2 w-70 center" placeholder="Paste URL link to image" onChange={onInputChange}/>
					<button className="f4 grow w-30 link ph3 pv2 dib white bg-light-purple" type="submit" onClick={onSubmit} >Detect</button>
				</div>
			</div>
		</div>

	);
};

export default ImageLinkForm; 