import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author={faker.name.firstName()}
                timeAgo="Today at 4:45PM"
                content="Nice Blog Post"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Sam"
                timeAgo="Today at 2:00AM"
                content="I like the subject"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author={faker.name.firstName()}
                timeAgo="Yesterday at 5:00PM"
                content="I like the writing"
                avatar={faker.image.avatar()}
            />
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'))
