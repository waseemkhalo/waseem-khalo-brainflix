import React from 'react'


function CommentsForm() {

    return (
        <div className="comment">
            <h3></h3>
            <div>
                <img className="comment__profle" src="../assets/images/Mohan-muruge.jpg" alt="profile" />
                <form>
                    <label>Join the conversation</label>
                    <textarea placeholder="comment"></textarea>
                    <button className='comment__button'>Comment</button>
                </form>
            </div>
        </div>
    )
}

export default CommentsForm

