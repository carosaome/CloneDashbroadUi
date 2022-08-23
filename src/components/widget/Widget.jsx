 import React from 'react'
 import './widget.scss'
 import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
 import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
 import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
 import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
 import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
 import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

 const Widget = ({type}) => {
    let data;

    //
    const amount = 44
    const diff = 144

    switch (type) {
        case 'users':
            data ={
                title: 'USER',
                isMoney: false,
                link:'See all user',
                icon: (
                    <PersonOutlinedIcon 
                    className='icon'
                    style={{
                        color:"crimson", 
                        backgroundColor:"rgba(255, 0, 0, 0.2 )"}}
                    />
                )
            }    

            break;
        case 'earnings':
            data ={
                title: 'EARNING',
                isMoney: true,
                link:'View net earnings',
                icon: (
                    <PaidOutlinedIcon 
                        className='icon'
                        style={{
                            color:"crimson", 
                            backgroundColor:"rgba(255, 0, 0, 0.2 )"}}
                    />
                )
            }    

            break;
        case 'orders':
        data ={
            title: 'ORDER',
            isMoney: true,
            link:'View all order',
            icon: <ShoppingCartOutlinedIcon className='icon'/>
        }    

        break;
        case 'balance':
        data ={
            title: 'Balance',
            isMoney: true,
            link:'See details',
            icon: <AccountBalanceOutlinedIcon className='icon'/>
        }    

        break;
        default:
            break;
    }
   return (
     <div className='widget'>
        <div className="left">
            <div className='title'>{data.title}</div>
            <div className="counter">{data.isMoney&&' $'} {amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
     </div>
   )
 }
 
 export default Widget