import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Used for fake data
import faker from 'faker';

const App = () => {
    return (
        <div className = 'ui container comments'>
            <ApprovalCard> 
                <CommentDetail 
                    author = 'Aaron'
                    date = 'Today: 6PM'
                    text = "Hey. Who's on?"
                    src = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = 'Sam'
                    date = 'Today: 7PM'
                    text = "Hey Aaron. How are you?"
                    src = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = 'Kyle'
                    date = 'Today: 7:30PM'
                    text = "Hey Sam."
                    src = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render( < App / > , document.getElementById('root'));