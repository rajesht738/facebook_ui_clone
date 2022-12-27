import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./post.scss";
import Comments from '../comments/Comments';
const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const Liked = false;
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.img} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                <div className="item">
                { Liked ? <FavoriteOutlinedIcon/> :  <FavoriteBorderOutlinedIcon/> }
                  12 Likes
                </div>
                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon/>
                 15 comments
                </div>
                <div className="item">
                <ShareOutlinedIcon/>
                Share
                </div>
                </div>
              {commentOpen && <Comments/> }
            </div>

        </div>
    );
};

export default Post