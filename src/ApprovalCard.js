import React from 'react';
import CommentDetail from './CommentDetail';

const ApprovalCard = (props) => {
    // console.log(props.children)
    return (
        <div className = "ui card">

            <div className = "content">
                {/* Coming from the Child component CommentDetail */}
                {props.children}
            </div>

            <div className = "extra content">
                <div className = "ui two buttons">
                    <div className = "ui basic green button">Approve</div>
                    <div className = "ui basic red button">Reject</div>
                </div>
            </div>

        </div>
    )
}

export default ApprovalCard
