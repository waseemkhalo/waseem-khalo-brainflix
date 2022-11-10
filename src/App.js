import Header from './component/Header/Header.js';
import Hero from './component/Hero/Hero.js';
import CommentsSection from './component/CommentSection/CommentsSection.js'
import Playlist from './component/Playlist/Playlist.js'
import videoData from './data/video-details.json'
import React, { useState } from 'react';
import './App.scss';


function App(props) {

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
      <Header />

      <video className="hero__video" poster={currentVideo.image} controls></video>
      
      <div className='main'>

        <div className='main__container'>
          <Hero
            currentVideo={currentVideo}
            // key={currentVideo.id}
            // title={currentVideo.title}
            // channel={currentVideo.channel}
            // timestamp={currentVideo.timestamp}
            // views={currentVideo.views}
            // image={currentVideo.image}
            // likes={currentVideo.likes}
            // description={currentVideo.description}
            // comment={currentVideo.comments.comment}
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

export default App;
