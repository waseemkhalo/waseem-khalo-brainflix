import Hero from '../component/Hero/Hero.js';
import CommentsSection from '../component/CommentSection/CommentsSection.js'
import Playlist from '../component/Playlist/Playlist.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.scss';
import { useParams } from 'react-router-dom';

function HomePage() {

    const apiKey = '84c9397b-6dfd-47d0-9b7f-c504666fcbad'

    const { videoId } = useParams();
    console.log(videoId)

    const [videoArray, setVideoArray] = useState([])
    const [currentVideo, setCurrentVideo] = useState(null)

    // const defaultVideoId = currentVideo.length > 0 ? currentVideo[0].id: null;

    useEffect(() => {
        axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
            .then(response => {
                setVideoArray(response.data)
                console.log(response.data);
            });
    }, []);

    useEffect(() => {

        if (!videoId) {
            return
        }

        axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
            .then(response => {
                setCurrentVideo(response.data);
            })
    }, [videoId])


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


    // const handleClick = (id) => {

    //     for (let i = 0; i < videoData.length; i++) {
    //         if (videoData[i].id === id) {
    //             setCurrentVideo(videoData[i]);
    //         }s
    //     };
    // }



    return (
        <>
            <video className="hero__video" poster={currentVideo.image} controls></video>
            <div className='main'>

                <div className='main__container'>
                    <Hero currentVideo={currentVideo} />
                    <CommentsSection currentVideo={currentVideo} />
                </div>

                <Playlist
                    // handleClick={handleClick}
                    // currentVideoId={currentVideo.id}
                    videoArray={videoArray}
                // title={currentVideo.title}
                // channel={currentVideo.channel}
                />
            </div>

        </>
    );
}

export default HomePage;