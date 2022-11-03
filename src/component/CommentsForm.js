import React from 'react'

function CommentsForm() {

    return (
        <div className="comment">
            <h3></h3>
            <div>
                <img src="../assets/images/Mohan-muruge.jpg" alt="profile" />
                <form>
                    <label>Join the conversation</label>
                    <textarea cplaceholder="comment"></textarea>
                    <button className='comment__button'>Comment</button>
                </form>
            </div>
        </div>
    )
}

export default CommentsForm

