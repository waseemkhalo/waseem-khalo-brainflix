import React, { useState, useRef } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


function UploadPageForm() {
    
    const [videoArray, setVideoArray] = useState([])
    const formRef = useRef();

    const addVideo = (e) => {
        e.preventDefault();
        
        const newVideo = {
            name: formRef.current.title.value,
            description: formRef.current.description.value
        }
        axios.post(`${API_URL}/videos`, newVideo)
            .then((response) => {
                setVideoArray(videoArray.concat(response.data))
            })
    };

    return (
        <div className='upload__form-container'>
            <form onSubmit={addVideo} className='upload__form'>
                <label htmlFor='title' className='upload__page-subheader'>Title your video</label>
                <input id='title' className='upload__video-title' src={''} placeholder='Add a title to your video'></input>
                <label htmlFor='description' className='upload__page-subheader'>Add video description</label>
                <textarea id='description' className='upload__description-box' placeholder="Add a description to your video"></textarea>
            </form>
        </div>
    )
}


export default UploadPageForm