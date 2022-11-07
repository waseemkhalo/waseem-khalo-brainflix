import React from 'react'
import pfp from '../../assets/images/Mohan-muruge.jpg'
import './CommentsForm.scss'



function CommentsForm() {

    return (

        <div className="comment">
            < p className="comment__counter" > 3 Comments</p >


            <div className='comment__form-container' >
                <img className='comment__profile-picture' src={pfp} alt='profile' />

                <form className='comment__form'>
                    <label htmlFor='comment' className='comment__title'>Join the Conversation</label>
                    <textarea className='comment__box' placeholder="Add a new comment"></textarea>
                    <button className='comment__form-submit'>Comment</button>
                </form>
            </div>
        </div>
    )
}

export default CommentsForm

