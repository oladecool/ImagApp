import React from 'react';

const CommentDetails = props => {
    const { author, timeAgo, post, avatar} = props;
    return (
        <div className="comment">
        <a href="" className="avatar">
        <img src={avatar} alt="avatar"/>
        </a>
        <div className="content">
          <a href="" className="author">
          {author}
          </a>
        </div>
        <div className="metadata">
                <span className="date">{timeAgo}</span>
        </div>
            <div className="text">{post}</div>
      </div>
    );
};

export default CommentDetails;