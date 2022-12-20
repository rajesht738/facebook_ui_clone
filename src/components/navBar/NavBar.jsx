import React, { useContext } from 'react'
import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
const NavBar = () => {
const {toggle} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/"><span>Social</span></Link>
        <HomeOutlinedIcon />
        <WbSunnyOutlinedIcon onClick={toggle}/>
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='search....' />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar