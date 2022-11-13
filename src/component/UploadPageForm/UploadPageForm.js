import React from 'react'
import { Link } from 'react-router-dom';

function UploadPageForm() {

    return (
        <div className='upload__form'>
            <form >
                <label className='upload__page-subheader'>Title your video</label>
                <input className='upload__video-title' src={''} placeholder='Add a title to your video'></input>
                <label className='upload__page-subheader' htmlFor='comment'>Add video description</label>
                <textarea className='upload__description-box' placeholder="Add a description to your video"></textarea>
                <button className='upload__form-button'>Publish</button>
                <Link to={'/'}> <button className='upload__form-cancel'>Cancel</button> </Link>
            </form>
        </div>
    )
}

export default UploadPageForm