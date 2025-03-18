import React,{useState} from 'react'
import Likebutton from './likebutton'



function Postcard({profileImage,username,content,isLiked}) {

  const [like,setLike] = useState(isLiked)

function toggle(){
  setLike(!like)
}


  return (
    <>
     <div>
      <h2>username: {username}</h2>
      <img className="image-size" src={profileImage} alt="" />
      <p>content: {content}</p>
      <Likebutton likeStyle={like} Likebutton={toggle}/>
    </div>
    
    
    </>
  )
}

export default Postcard