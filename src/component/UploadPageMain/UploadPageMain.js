import React from 'react'
import { Link } from 'react-router-dom';
import uploadedVideoTemp from '../../assets/images/Upload-video-preview.jpg'
import UploadPageForm from '../UploadPageForm/UploadPageForm';

function UploadPageMain() {
    return (
        <div>
            <h1>Upload Video</h1>
            <div>
                <h2>Video Thumbnail</h2>
                <img src={uploadedVideoTemp}></img>
            </div>

            <div>
                <UploadPageForm />
            </div>
        </div>
    )
}

export default UploadPageMain