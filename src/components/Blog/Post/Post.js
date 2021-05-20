import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Post.css';

import file from '../../../2021-01-16-A-clever-quantum-trick.md';

class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = { post: null };
    }

    componentDidMount() {
        fetch(file).then((response) => response.text()).then((text) => {
          this.setState({ post: text })
        })
    }

    render() {
        return (
            <div>
               <ReactMarkdown children={this.state.post} className="post-content"></ReactMarkdown>
            </div>
        );
    }
}

export default Post;