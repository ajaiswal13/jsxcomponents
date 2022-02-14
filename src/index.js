import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
        return (
           <div className="ui container comments">

                  <ApprovalCard>
                     Do you want to see the magic happen?
                  </ApprovalCard>
                 <ApprovalCard>
                     <CommentDetail authorName="Tom" commentDate="Today at 5 pm" commentTime="Awesome" profilepicture={faker.image.avatar()}/>
                  </ApprovalCard>
                 <ApprovalCard>
                     <CommentDetail authorName="Sam" commentDate="Today at 4:30 pm" commentTime="Nice job" profilepicture={faker.image.avatar()}/>
                 </ApprovalCard>
           </div>
        );
};

ReactDOM.render(<App/>,document.getElementById('root'));