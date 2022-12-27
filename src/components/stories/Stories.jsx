import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import "./stories.scss"
const Stories = () => {
    const { currentUser } = useContext(AuthContext);
    const stories = [
        {
            id: 1,
            name: "Rahultiwari",
            img: "https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg"
        },
        {
            id: 2,
            name: "Aman",
            img: "https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg"
        },
        {
            id: 3,
            name: "Vishal",
            img: "https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg"
        },
    ]
    return (

        <div className='stories'>
            <div className='story'>
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map((story) => (

                <div className='story'>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>

            ))}
        </div>
    )
}

export default Stories