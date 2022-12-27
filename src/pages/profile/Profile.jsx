import React from 'react';
import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts"
const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/4781209/pexels-photo-4781209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='cover' />
        <img src="https://images.pexels.com/photos/14664633/pexels-photo-14664633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize='large' />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize='large' />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize='large' />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize='large' />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize='large' />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div class="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div class="item">
                <LanguageIcon />
                <span>fb.com</span>
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile