// import Data from '../data/video-details.json'
import React from "react";

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
            <div>
                <h2>{props.title}</h2>
                <div>
                    <h3>{props.channel}</h3>
                    <h4>{date}</h4>
                    <p>{props.views}</p>
                    <p>{props.likes}</p>
                </div>
            </div>

            <div>
                <p>{props.description}</p>
                <p>import # of comments</p>
            </div>
        </div>

    )

}
export default Hero;