import React, { Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const particleOptions = {
      "particles": {
          "number": {
              "value": 200,
              "density": {
                  "enable": true,
                  "value_area": 1000,
              }
          },
      }
  } 


 
const app = new Clarifai.App({
 apiKey: 'KEY GOES HERE'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onSubmit = () =>{
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(
      function (response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err){

      }
    );
    console.log("submit")
  }


  render() {
    return (
    <div className="App">
      <Particles className="particles" 
      params={particleOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {this.onInputChange} onSubmit= {this.onSubmit}/>
       <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
  };
};

export default App;
