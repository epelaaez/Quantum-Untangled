import React from 'react';
import './Blog.css';

import PostCard from './PostCard/PostCard.js';
import Post from './Post/Post.js';

import cover from '../../assets/cover_1.png';
import cover2 from '../../assets/cover_2.jpg';

function Blog() {
    return (
        <div className="blog-content">
            <PostCard title="Post-1" summary="Summary for post 1" img={cover} author="Emilio Pelaez" date="May 11, 2021"/>
            <PostCard title="Post-2" summary="Summary for post 2" img={cover2} author="Emilio Pelaez" date="January 10, 2021"/>
            <Post />
        </div>
    );
}

export default Blog;