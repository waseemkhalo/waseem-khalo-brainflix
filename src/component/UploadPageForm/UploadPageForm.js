import React, { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const API_URL = process.env.REACT_APP_API_URL;


function UploadPageForm() {
    const formRef = useRef();

    const addVideo = (e) => {

        e.preventDefault();

        const newVideo = {
            title: formRef.current.title.value,
            description: formRef.current.description.value
            
        }

        

        axios.post(`${API_URL}/videos`, newVideo)
            .then((results) => {
                setTimeout(() => {
                    window.location.href = '/'
                }, 3000)
                alert('upload complete')
            })
    };


    return (
        <div className='upload__form-container'>
            <form onSubmit={addVideo} ref={formRef} className='upload__form'>
                <label htmlFor='title' className='upload__page-subheader'>Title your video</label>

                <input
                    id='title'
                    name='title'
                    type='text'
                    className='upload__video-title'
                    src={''} placeholder='Add a title to your video'>
                </input>

                <label htmlFor='description' className='upload__page-subheader'>Add video description</label>

                <textarea
                    id='description'
                    name='description'
                    className='upload__description-box'
                    placeholder="Add a description to your video">
                </textarea>

                <div className='upload__button-container'>
                    <button type='submit' className='upload__form-button'>Publish</button>
                    <Link to={'/'}> <button className='upload__form-cancel'>Cancel</button> </Link>
                </div>
            </form>
        </div>
    )
}


export default UploadPageForm