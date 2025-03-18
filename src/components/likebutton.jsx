import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button 
      onClick={toggleLike} 
      style={{ 
        backgroundColor: liked ? 'red' : 'gray', 
        color: 'white', 
        border: 'none', 
        padding: '10px', 
        cursor: 'pointer' 
      }}
    >
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;