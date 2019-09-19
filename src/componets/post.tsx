import React from 'react';
import { IPost } from "../constants";

interface IPostProps {
    posts: Array<IPost>;
    loading: boolean;
}

const post = ({ posts, loading }: IPostProps) => {
    if (loading) return <h2>Loading....</h2>
    return (
        <ul className="list-group mb-4">
            {posts.map(post => <li key={post.id} className="list-group-item">{post.title}</li>)}
        </ul>
    )
}

export default post
