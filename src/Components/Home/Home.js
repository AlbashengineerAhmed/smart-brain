import React, { useState } from 'react';
import Rank from './../Rank/Rank';
import ImageLinkForm from './../ImageLinkForm/ImageLinkForm';
import GeneralDetection from './../GeneralDetection/GeneralDetection';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
export default function Home() {
  const [input, setInput] = useState("");
const [IMAGE_URL, setIMAGE_URL] = useState(""); 
let [boxes, setBoxes] = useState([]); 

  ///////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = 'bd0044feadde49abb728292b78d43a38';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'ahmed72261';       
    const APP_ID = 'ahmed72261';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'general-image-detection';
    const MODEL_VERSION_ID = '1580bb1932594c93b7e2e04456af7c6f';    

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const requestBody = {
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID
      },
      inputs: [
        {
          data: {
            image: {
              url: input  // Use the input value as the URL
            }
          }
        }
      ]
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT,
            'Content-Type': 'application/json' // Add the Content-Type header
        },
        body: JSON.stringify(requestBody)
    };

let calculateObjectLocations = (data) => {
  const clarifaiRegions = data.outputs[0].data.regions;
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);

  return clarifaiRegions.map((region) => {
    const filteredConcepts = region.data.concepts.filter((concept) => {
      return concept.name === 'Human face';
    });

    if (filteredConcepts.length > 0) {
      return {
        leftCol: region.region_info.bounding_box.left_col * width,
        rightCol: width - (region.region_info.bounding_box.right_col * width),
        bottomRow: height - (region.region_info.bounding_box.bottom_row * height),
        topRow: region.region_info.bounding_box.top_row * height
      };
    }
  }).filter(Boolean);
};


    

    const displayObjectBox = (boxes) => {
      console.log(boxes);
      setBoxes(boxes);
    };
    

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const onSubmit = () => {
    setIMAGE_URL(input);
  
    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        displayObjectBox(calculateObjectLocations(result));
      })
      .catch((error) => console.log("error", error));
  };
  

  return (
    <div className='my-5'>
      <Navigation/>
      <Rank />
      <ImageLinkForm onInputChange = {onInputChange} onSubmit = {onSubmit}/>
      <GeneralDetection boxes = {boxes}  IMAGE_URL = { IMAGE_URL}/>
    </div>
  )
}
