import Header from './component/Header.js';
import Hero from './component/Hero.js';
import CommentsForm from './component/CommentsForm.js';
import CommentsSection from './component/CommentsSection'
import Playlist from './component/Playlist'
import videoData from './data/video-details.json'
import {useState} from 'react';
import React from "react";
import './App.scss';


function App(props) {

const currentVideo = videoData[0];
const videoComments = currentVideo.comments[0]


  // const [currentVideo, setCurrentVideo] = useState(videoData[0])
  
  // function handleClick () {
  //   setCurrentVideo
  // }

  return (
    <>
      <Header />
      
      <Hero 
      key={currentVideo.id}
      title={currentVideo.title}
      channel={currentVideo.channel}
      timestamp={currentVideo.timestamp}
      views={currentVideo.views}
      image={currentVideo.image}
      likes={currentVideo.likes}
      description={currentVideo.description}


      />
      <CommentsForm />

      <CommentsSection 
      key={videoComments.id}
      name={videoComments.name}
      comment={videoComments.comment}
      timestamp={videoComments.timestamp}
      
      />
      <Playlist />
    </>
  );
}

export default App;
