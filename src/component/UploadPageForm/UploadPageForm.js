import React from 'react'
import { Link } from 'react-router-dom';

function UploadPageForm() {

    return (
        <form>
            <label>Title your video</label>
            <input src={''} placeholder='Add a title to your video'></input>
            <label htmlFor='comment' className='comment__title'>Add video description</label>
            <textarea className='comment__box' placeholder="Add a description to your video"></textarea>
            <button>Publish</button>
            <Link to={'/'}> <button>Cancel</button> </Link>
        </form>
    )
}

export default UploadPageForm