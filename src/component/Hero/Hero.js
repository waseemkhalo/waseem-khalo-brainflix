// import Data from '../data/video-details.json'
import React from "react";
import CommentsForm from "../CommentForm/CommentsForm";
import viewsIcon from '../../assets/Icons/views.svg'
import likesIcon from '../../assets/Icons/likes.svg'
import './Hero.scss'

function Hero(props) {

    const options = {

        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }

    const timestamp = props.timestamp;
    const date = new Intl.DateTimeFormat('en-US', options)
        .format(timestamp)

    return (
        <div className="hero">
            <video className="hero__video" poster={props.image} controls></video>
            <div className="hero__content-container">
                <h2 className="hero__video-header">{props.title}</h2>

                <div className="hero__video-details">
                    <div className="hero__video-details-card">
                        <h3 className="hero__video-channel">By {props.channel}</h3>
                        <h4 className="hero__video-date">{date}</h4>
                    </div>
                    <div className="hero__video-details-card" id="red"  >
                        <div className="hero__icons-container">
                            <img className="icon" src={viewsIcon} />
                            <p className="hero__video-content">{props.views}</p>
                        </div>
                        <div className="hero__icons-container">
                            <img className="icon" src={likesIcon} />
                            <p className="hero__video-content">{props.likes}</p>
                        </div>
                    </div>
                </div>

                <p className="hero__video-description">{props.description}</p>

            </div>

            <CommentsForm />


        </div>

    )

}
export default Hero;