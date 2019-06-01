import React from 'react';
import faker from 'faker';
import './App.css';
import CommentDetails from './components/CommentDetails';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <br/>
      <ApprovalCard>      
      <CommentDetails
        author="Sunny"
        timeAgo="Today at 6:00pm"
        post="Nice blog post!"
        avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>      
      <CommentDetails
        author="Sam jax"
        timeAgo="Today at 8:00pm"
        post="Nice work!"
        avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>      
      <CommentDetails
        author="Mike brad"
        timeAgo="Today at 5:00pm"
        post="Nice Article!"
        avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
}

export default App;
