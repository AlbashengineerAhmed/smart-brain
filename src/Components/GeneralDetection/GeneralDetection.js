import React from 'react';
import './GeneralDetection.css';
import image from '../../images/profile.jpg'
export default function GeneralDetection({ IMAGE_URL, boxes }) {
  return (
    <div className='text-center row p-2 mt-3'>
      <div className='mt-3 col-md-6 col-12 m-auto relative responsive-photo'>
        <img
          id='inputImage'
          // src={IMAGE_URL ? IMAGE_URL : 'https://samples.clarifai.com/face-det.jpg'}
          src={IMAGE_URL ? IMAGE_URL: image}
          width='100%'
          className='col-12'
          height='auto'
          alt='photos'
        />
        {boxes.map((regionBox, index) => (
          <div
            key={index}
            className='bounding-box absolute'
            style={{
              top: regionBox.topRow,
              right: regionBox.rightCol,
              bottom: regionBox.bottomRow,
              left: regionBox.leftCol
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
