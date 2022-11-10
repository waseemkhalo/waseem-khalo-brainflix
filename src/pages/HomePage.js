import Hero from '../component/Hero/Hero.js';
import CommentsSection from '../component/CommentSection/CommentsSection.js'
import Playlist from '../component/Playlist/Playlist.js'
import videoData from '../data/video-details.json'
import React, { useState } from 'react';
import '../App.scss';

function HomePage() {
    const [currentVideo, setCurrentVideo] = useState(videoData[0])


    const handleClick = (id) => {
  
      for (let i = 0; i < videoData.length; i++) {
        if (videoData[i].id === id) {
          setCurrentVideo(videoData[i]);
        }
      };
    }
  
    return (
      <>
        <video className="hero__video" poster={currentVideo.image} controls></video>
        
        <div className='main'>
  
          <div className='main__container'>

            <Hero
              currentVideo={currentVideo}
            />
  
            <CommentsSection
              currentVideo={currentVideo}
            />
          </div>
  
          <Playlist
            handleClick={handleClick}
            currentVideoId={currentVideo.id}
            videoData={videoData}
            title={currentVideo.title}
            channel={currentVideo.channel}
          />
        </div>
  
      </>
    );
  }
  
  export default HomePage;