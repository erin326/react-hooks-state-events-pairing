import video from "../data/video.js";
import CommentsList from './CommentsList';
import Likes from './Likes';
import Header from './Header.js';
import { useState } from "react";



function App() {
  console.log("Here's your data:", video);

  
  const videoData = video;

  const [commentButton, setCommentButton] = useState(true);

  const [commentsDisplay, setCommentsDisplay] = useState(true);


  const [likeCount, setLikeCount] = useState(videoData.upvotes);

  const [dislikeCount, setDislikeCount] = useState(videoData.downvotes);




  

  return (
    <>
    <div className="App">
    <iframe
    width="919"
    height="525"
    src="https://www.youtube.com/embed/dpw9EHDh2bM"
    frameborder="0"
    allowfullscreen
    title="Thinking in React"
    />
</div>  
    
  
  <Header views={video.views} uploadDate={video.createdAt}/>
  <Likes likeCount={likeCount} setLikeCount={setLikeCount} dislikeCount={dislikeCount} setDislikeCount={setDislikeCount}/>
  <CommentsList commentButton={commentButton} setCommentButton={setCommentButton} videoData={videoData} commentsDisplay={commentsDisplay} setCommentsDisplay={setCommentsDisplay}/>

    </>
  );
}

export default App;


/*
App
|__Video
|__Comments
|__Likes

"https://www.youtube.com/embed/dQw4w9WgXcQ"

*/