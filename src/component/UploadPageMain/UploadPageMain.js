import React from 'react'
import uploadedVideoTemp from '../../assets/images/Upload-video-preview.jpg'
import UploadPageForm from '../UploadPageForm/UploadPageForm';
import './UploadPageMain.scss'
import { Link } from 'react-router-dom';


function UploadPageMain() {

    const handleClick = () => {
        alert('upload complete')
      }
    return (
        <div className='upload'>
            <h1 className='upload__page-header'>Upload Video</h1>


            <div className='upload__container'>
                <div className='upload__picture-container'>
                    <h2 className='upload__page-subheader'>Video Thumbnail</h2>
                    <img className='upload__picture' src={uploadedVideoTemp} alt='upload'></img>
                </div>
                <div className='upload__form'>
                    <UploadPageForm />
                </div>

            </div>

            <div className='upload__button-container'>
                <Link onClick={handleClick} className='upload__form-button-link' to={'/'}> <button className='upload__form-button'>Publish</button> </Link>
                <Link to={'/'}> <button className='upload__form-cancel'>Cancel</button> </Link>
            </div>
        </div>
    )
}

export default UploadPageMain