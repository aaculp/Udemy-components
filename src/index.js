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
                src = {faker.image.avatar()}
            />
            <CommentDetail 
                author = 'Sam'
                date = 'Today: 7PM'
                text = "Hey Aaron. How are you?"
                src = {faker.image.avatar()}
            />
            <CommentDetail 
                author = 'Kyle'
                date = 'Today: 7:30PM'
                text = "Hey Sam."
                src = {faker.image.avatar()}
            />
        </div>
    )
}

ReactDOM.render( < App / > , document.getElementById('root'));