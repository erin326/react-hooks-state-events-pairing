import React from 'react';
import {useState} from 'react';


function CommentsList({videoData, commentButton, setCommentButton, commentsDisplay, setCommentsDisplay }) {

    const comments = videoData.comments.map(comment => {
        return (
        <div key={comment.id}>
        <p><strong>{comment.user}</strong></p>
        <p>{comment.comment}</p>
        </div>
        )
    })


   
    function handleCommentButton() {
        setCommentButton(commentButton => !commentButton)
        setCommentsDisplay(!commentsDisplay);
         
     }


    return (

        <div>
            <button onClick={handleCommentButton}>{commentButton ? "Hide Comments" : "Show Comments"}</button>
           {commentsDisplay ? <h2>{videoData.comments.length} Comments</h2> : null } 
            
           <div>
               {commentsDisplay ? comments : null}
           </div>
            
        </div>
    )
}

export default CommentsList;