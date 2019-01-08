import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; //npm install --save faker //in terminal into project file
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
          <CommentDetail/>
          <CommentDetail/>
          <CommentDetail/>
          <CommentDetail/>
          <CommentDetail/>
      </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
