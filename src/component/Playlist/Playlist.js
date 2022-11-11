import React from 'react'
import './Playlist.scss'
import { Link } from 'react-router-dom';


function Playlist({handleClick, videoArray, currentVideoId }) {
    const filteredVideos = videoArray.filter((vid) => { return vid.id !== currentVideoId })

    return (

        <aside className='next-video'>

            <div className='playlist'>
                <h1 className='playlist__header'>next videos</h1>
                {filteredVideos.map((video) => {
                    return (
                        <div className='playlist__next-video-container' key={video.id}>
                            <Link to={`/video/${video.id}`} >
                            <img className='playlist__next-video' src={video.image} alt={video.title}></img>
                            </Link>
                        
                         
                            <div>
                                <h2 className='playlist__title'>{video.title}</h2>
                                <h3 className='playlist__channel'>{video.channel}</h3>
                            </div>
                        </div>
                    )

                })}
            </div>

        </aside>
    )
}

export default Playlist