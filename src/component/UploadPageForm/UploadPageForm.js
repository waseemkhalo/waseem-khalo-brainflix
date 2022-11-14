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
                <div className='upload__button-container'>
                    <Link className='upload__form-button-link'to={'/'}> <button className='upload__form-button'>Publish</button> </Link>
                    <Link to={'/'}> <button className='upload__form-cancel'>Cancel</button> </Link>
                </div>
            </form>
        </div>
    )
}

export default UploadPageForm