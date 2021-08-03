import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam"
                timeAgo="Today at 4:00 AM"
                content="Funny !" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex"
                timeAgo="Today at 7:00 AM" 
                content="Not Funny !" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 2:00 PM" 
                content="Funny Indeed !" 
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
