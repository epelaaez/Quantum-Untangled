import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Post.css';

import file from '../../../assets/posts/2021-01-16-A-clever-quantum-trick.md';

class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            post: null,
            author: null,
            title: null,
            date: null,
            tags: null,
        };
    }

    componentDidMount() {
        fetch(file).then((response) => response.text()).then((text) => {
            const rawData = text.split('-----')
            const metaData = JSON.parse(rawData[0]);
            this.setState({
                post: rawData[1],
                author: metaData.author,
                title: "# " + metaData.title,
                date: metaData.date,
                tags: metaData.tags,
            });
        })
    }

    getImgPath(uri) {
        return require(`../../../assets/${uri}`).default;
    }

    render() {
        return (
            <div>
                <ReactMarkdown children={this.state.title}></ReactMarkdown>
                <p className="post-metadata">By {this.state.author} on {this.state.date}</p>
                <ReactMarkdown transformImageUri={this.getImgPath} children={this.state.post} className="post-content"></ReactMarkdown>
            </div>
        );
    }
}

export default Post;