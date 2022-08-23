import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';  
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <span className="title">Total Revenue</span>
            <MoreVertOutlinedIcon className='icon'/>
        </div>

        <div className="center">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={'70%'}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$444</p>
            <p className="desc">
                Previous transactions processing. Last payments may no to be included
            </p>
        </div>
        <div className="bottom">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult positive"> 
                    <KeyboardArrowUpOutlinedIcon/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative"> 
                    <KeyboardArrowDownOutlinedIcon/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult positive"> 
                    <KeyboardArrowUpOutlinedIcon/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured