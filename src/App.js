import Header from './component/Header.js';
import Hero from './component/Hero.js';
import CommentsForm from './component/CommentsForm.js';
import CommentsSection from './component/CommentsSection'
import Playlist from './component/Playlist'
import videoData from './data/video-details.json'
import React, { useState } from 'react';
import './App.scss';


function App(props) {



  const [currentVideo, setCurrentVideo] = useState(videoData[0])
  // const currentVideo = videoData[0];
  // const videoComments = currentVideo.comments[0]


  const handleClick = (id) => {

    for (let i = 0; i < videoData.length; i++) {

      if (videoData[i].id === id) {
        setCurrentVideo(videoData[i]);

      }

    };

    // setCurrentVideo(videoData[2])

    // console.log('hi')
    // return; 


  }

  // function filteredVideos(videoId) {
  //   // 1. Copy the cars array
  //   const newVideoData = [...currentVideo];

  //   // 2. Find the item we want to update
  //   const indexOfVideo = currentVideo.findIndex((video) => videoId === video.id);

  //   // 3. Update the item
  //   // newCarsArray[indexOfCar].purchased = true; // technically this mutates the original object
  //   newCarsArray[indexOfCar] = { ...newCarsArray[indexOfCar], purchased: true };

  //   setCars(newCarsArray);
  // }


  return (
    <>
      <Header />

      <Hero
        // currentVideo = {currentVideo} 
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
      // key={videoComments.id}
      // name={videoComments.name}
      // comment={videoComments.comment}
      // timestamp={videoComments.timestamp}


      />
      <Playlist
        handleClick={handleClick}
        currentVideoId={currentVideo.id}
        videoData={videoData}
        title={currentVideo.title}
        channel={currentVideo.channel}
      />



    </>
  );
}

export default App;
