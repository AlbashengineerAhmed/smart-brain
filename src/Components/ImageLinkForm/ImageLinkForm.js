import React from 'react'
import'./ImageLinkForm.css'
export default function ImageLinkForm({onInputChange,onSubmit}) {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
        <p className='fs-4 fw-bold fst-italic text-center'>
            This Magic Brain Will detect faces in your pictures.
        </p>
        <div className='shadow-lg form p-3'>
            <input className='fs-5 p-2 text-center' type="text" onChange={onInputChange}/>
            <button onClick={onSubmit} className='btn px-2 mb-2 ms-3 fs-5 btn-outline' type="button">Detect</button>
        </div>
    </div>
  )
}
