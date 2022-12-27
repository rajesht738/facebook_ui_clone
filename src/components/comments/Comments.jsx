import { useContext } from "react";
import "./comments.scss"
import { AuthContext } from '../../context/authContext'
const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsum ut iure sapiente aut obca",
            name: "Rohan Singh",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/14664633/pexels-photo-14664633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        },

        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsum ut iure sapiente aut obca",
            name: "Shivam Singh",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/14664633/pexels-photo-14664633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        },
    ];
    return (
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic } alt="" />
           <input type="text" placeholder="write a comments..." />
           <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="infoo">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago </span>
                </div>
            ))
            }</div>
    )
}

export default Comments