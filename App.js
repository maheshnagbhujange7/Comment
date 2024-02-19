import logo from './logo.svg';
import './App.css';

import { Component } from 'react';
import Comments from './ReactApp/Comments';
function App() {
  return (
    
     <div className="App">
      <h1>REACT</h1>  
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
  
     </div>
  );
}

export default App;
