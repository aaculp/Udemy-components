import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Used for fake data
import faker from 'faker';

const App = () => {
    return (
        <div className = 'ui container comments'>
            <CommentDetail 
                author = 'Aaron'
                date = 'Today: 6PM'
                text = "Hey. Who's on?"
                />
            <CommentDetail 
                author = 'Sam'
                date = 'Today: 7PM'
                text = "Hey Aaron. How are you?"
                 />
            <CommentDetail 
                author = 'Kyle'
                date = 'Today: 7:30PM'
                text = "Hey Sam."
                 />
                
        </div>
    )
}

ReactDOM.render( < App / > , document.getElementById('root'));