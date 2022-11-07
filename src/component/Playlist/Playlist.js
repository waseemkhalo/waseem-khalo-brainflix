import React from 'react'
import './Playlist.scss'

function Playlist({handleClick, videoData, currentVideoId }) {
    const filteredVideos = videoData.filter((vid) => { return vid.id !== currentVideoId })

    return (

        <div>
            {/* alt="import video picture" */}
            {/* src={props.image} */}

            <div className='playlist'>
                <h1 className='playlist__header'>next videos</h1>
                {filteredVideos.map((video) => {
                    return (
                        <div className='playlist__next-video-container' key={video.id}>
                            <img className='playlist__next-video' src={video.image}
                                onClick={() => { handleClick(video.id) }}
                            >
                            </img>
                            <div>
                                <h2 className='playlist__title'>{video.title}</h2>
                                <h3 className='playlist__channel'>{video.channel}</h3>
                            </div>
                        </div>
                    )

                })}

            </div>

        </div>
    )
}

export default Playlist