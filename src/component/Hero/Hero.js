// import Data from '../data/video-details.json'
import React from "react";
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'
import CommentsForm from "../CommentForm/CommentsForm";

import './Hero.scss'

function Hero({currentVideo}) {

    const options = {

        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }

    const timestamp = currentVideo.timestamp;
    const date = new Intl.DateTimeFormat('en-US', options)
        .format(timestamp)

    return (
        <div className="hero">

            <div className="hero__content-container">
                <h2 className="hero__video-header">{currentVideo.title}</h2>

                <div className="hero__video-details">
                    <div className="hero__video-details-card">
                        <h3 className="hero__video-channel">By {currentVideo.channel}</h3>
                        <h4 className="hero__video-date">{date}</h4>
                    </div>
                    <div className="hero__video-details-card" >
                        <div className="hero__icons-container">
                            <img className="icon" src={viewsIcon} />
                            <p className="hero__video-content">{currentVideo.views}</p>
                        </div>
                        <div className="hero__icons-container">
                            <img className="icon" src={likesIcon} />
                            <p className="hero__video-content">{currentVideo.likes}</p>
                        </div>
                    </div>
                </div>

                <p className="hero__video-description">{currentVideo.description}</p>

            </div>

            <CommentsForm />

        </div>

    )

}
export default Hero;