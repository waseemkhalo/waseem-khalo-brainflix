import React from 'react'
import './CommentsSection.scss'
import videoData from '../../data/video-details.json'



function CommentsSection(props) {

const postedComments = videoData.comments;
console.log(postedComments)

    const options = {

        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }

    const timestamp = props.timestamp;
    const date = new Intl.DateTimeFormat('en-US', options)
        .format(timestamp)


    return (
        // for (i=0;) {
        //     return; 
        // }
        <div></div>
        // <div className='comment__card'>
        //     <div className='comment__profile-picture'></div>
        //     <div>
        //         <div>
        //             <h1>{props.name}</h1>
        //             <h2>{date}</h2>
        //         </div>
        //         <p>{props.comment}</p>
        //     </div>

        // </div>
    )


}

export default CommentsSection