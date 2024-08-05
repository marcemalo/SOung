import React, { useState, useEffect } from 'react';
import "./co.css"

const CommentsList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setComments(data.comments); 
      })
  }, []);

  return (
    <div>
      <h1>Comments List</h1>
      <div className="container">
        <div className="coment__wrapppper">
        <div className='coments__div'>
        {comments.map(comment => (
          <li key={comment.id}>
            <p><strong>{comment.name}</strong> ({comment.user.username})</p>
            <p><strong>likes:{comment.likes}</strong> ({comment.user.fullName})</p>
            <p>{comment.body}</p>
          </li>
        )).slice(0, 3)}
      </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
