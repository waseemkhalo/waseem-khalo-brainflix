import React from 'react'
import { Link } from 'react-router-dom';

function UploadPageForm() {

    return (
        <div className='upload__form-container'>
            <form className='upload__form'>
                <label className='upload__page-subheader'>Title your video</label>
                <input className='upload__video-title' src={''} placeholder='Add a title to your video'></input>
                <label className='upload__page-subheader' htmlFor='comment'>Add video description</label>
                <textarea className='upload__description-box' placeholder="Add a description to your video"></textarea>
            </form>
        </div>
    )
}


export default UploadPageForm