import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Used for fake data
import faker from 'faker';

const App = () => {
    return (
        <div className = 'ui container comments'>
            <CommentDetail author = 'Aaron' />
            <CommentDetail author = 'Sam' />
            <CommentDetail author = 'Kyle' />
        </div>
    )
}

ReactDOM.render( < App / > , document.getElementById('root'));