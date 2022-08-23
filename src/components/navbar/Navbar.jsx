import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <input type="text" placeholder='Search...' />
            <SearchIcon/>
        </div>
        <div className="right">
            <div className="item">
                <LanguageOutlinedIcon className='icon'/> English
            </div>
            <div className="item">
                <DarkModeOutlinedIcon className='icon'/>
            </div>
            <div className="item">
                <ChatBubbleOutlineOutlinedIcon className='icon'/>
            </div>
            <div className="item">
                <NotificationsNoneOutlinedIcon className='icon'/>
                <div className="counter">1</div>
            </div>
            <div className="item">
                <FormatListBulletedOutlinedIcon className='icon'/>
                <div className="counter">2</div>

            </div>
            <div className="item">

            </div>

        </div>

    </div>


    )
}

export default Navbar