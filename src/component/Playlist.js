import React from 'react'


function Playlist({ handleClick, videoData, currentVideoId }) {
    const filteredVideos = videoData.filter((vid) => {return vid.id !== currentVideoId})

    return (

        <div>
            {/* alt="import video picture" */}
            {/* src={props.image} */}

            <div>
                <h1>next videos</h1>
                {filteredVideos.map((video) => {
                    return (
                    <div key={video.id}>
                    <img src={video.image}
                        onClick={() => { handleClick(video.id) }} 
                        >
                    </img>
                    <h2>{video.title}</h2>
                    <h3>{video.channel}</h3>
                    </div>
                    )
                    
                })}

            </div>

        </div>
    )
}

export default Playlist