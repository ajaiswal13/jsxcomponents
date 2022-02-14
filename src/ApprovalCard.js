import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const ApprovalCard = (props) => {
     return(
        <div className= "ui cards">
            <div className="card">
                 <div className="content">
                    {props.children}
                 </div>

                 <div className="extra content approve-reject">
                     <div className="ui basic green button">Approve</div>
                     <div type="button" className="ui basic red button">Reject</div>
                 </div>
            </div>
        </div>
     );
};

export default ApprovalCard;