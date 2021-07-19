import React from 'react';

function Likes({ likeCount, setLikeCount, dislikeCount, setDislikeCount}) {

    function handleLikeClick() {
        setLikeCount(likeCount + 1);
    }

    function handleDislikeClick() {
        setDislikeCount(dislikeCount + 1)
    }
    return(
        <div>
            <button onClick={handleLikeClick}>
            {likeCount} 👍
            </button>
            <button onClick={handleDislikeClick}>
            {dislikeCount} 👎
            </button>
        </div>
    )
}

export default Likes;