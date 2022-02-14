import React from 'react';

const CommentDetail = (props) => {
  return(
    <div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" src={props.profilepicture}></img>
    </a>
   <div className="content">
        <a href="/" className="author">
            {props.authorName}
        </a>
        <div className="metadata">
            <span className="date"> {props.commentDate} </span>     
        </div>
        <div className="text">
            {props.commentTime}
        </div>
   </div>
    </div>
  );
};

export default CommentDetail;