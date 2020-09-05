import React, { useState, useEffect } from 'react';
import PostInformation from '../PostInformation/PostInformation';

const PostData = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    //send post data to PostInformation child component
    return (
        <div>
            {
                post.map( post => <PostInformation post={post}></PostInformation> )
            }
        </div>
    );
};

export default PostData;