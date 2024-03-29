import Hero from '../component/Hero/Hero.js';
import CommentsSection from '../component/CommentSection/CommentsSection.js'
import Playlist from '../component/Playlist/Playlist.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.scss';

const API_URL = process.env.REACT_APP_API_URL;


function HomePage(props) {

    const { videoId } = useParams();

    const [videoArray, setVideoArray] = useState([])
    const [currentVideo, setCurrentVideo] = useState(null)

    const defaultVideoId = videoArray.length > 0 ? videoArray[0].id: null;
    const selectedVideoId = videoId || defaultVideoId;

    useEffect(() => {
        axios.get(`${API_URL}/videos`)
            .then(response => {
                setVideoArray(response.data)
            
            });
    }, []);

    useEffect(() => {

        if (!selectedVideoId) {
            return
        }

        axios.get(`${API_URL}/videos/${selectedVideoId}`)
            .then(response => {
                setCurrentVideo(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [selectedVideoId])


    if (!currentVideo) {
        return (
            <>
                <p>Loading.</p>

                <Playlist
                    videoArray={videoArray}
                />
            </>
        )
    }


    return (
        <>
            <video className="hero__video" poster={currentVideo.image} controls></video>
            <div className='main'>

                <div className='main__container'>
                    <Hero currentVideo={currentVideo} />
                    <CommentsSection currentVideo={currentVideo} />
                    
                </div>

                <Playlist
                    videoArray={videoArray}
                    selectedVideoId={selectedVideoId}
                />
            </div>

        </>
    );
}

export default HomePage;