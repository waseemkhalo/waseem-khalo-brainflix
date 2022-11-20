import React from 'react'
import './CommentsSection.scss'



function CommentsSection({ currentVideo }) {
    return (

        <div className='comment__container'>
            {currentVideo.comments.map((postedComments) => {

                const options = {

                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                }

                const timestamp = postedComments.timestamp;
                const date = new Intl.DateTimeFormat('en-US', options)
                .format(timestamp)

                return <div className='comment__section' key={postedComments.id}>
                    <div className='comment__section-container'>
                        <div className='comment__profile-picture'></div>
                        <div className='comment__card'>
                            <div className='comment__card-title'>
                                <h5 className='comment__card-name'>{postedComments.name}</h5>
                                <h6 className='comment__card-date'>{date}</h6>
                            </div>
                            <p className='comment__card-text'>{postedComments.comment}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>

    )


}

export default CommentsSection