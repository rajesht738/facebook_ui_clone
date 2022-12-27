import React from 'react'
import Post from '../post/Post';
import "./posts.scss"
const Posts = () => {
    const posts  = [
        {
            id: 1,
            name: 'John Doe',
            userId: 1,
            profilePic: "",
            desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img: "https://images.pexels.com/photos/4781209/pexels-photo-4781209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: 'John Doe',
            userId: 1,
            profilePic: "",
            desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img: "https://images.pexels.com/photos/8140059/pexels-photo-8140059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: 'John Doe',
            userId: 2,
            profilePic: "",
            desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img: "https://images.pexels.com/photos/14664633/pexels-photo-14664633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];
  return (
    <div className='posts'>
    { posts.map((post) => (
        <Post post= {post} key={post.id}/>
    ))
    }
    </div>
  )
}

export default Posts