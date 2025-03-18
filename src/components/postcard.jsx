import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '10px' }}>
      <img src={post.profilePicture} alt={`${post.username}'s profile`} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;