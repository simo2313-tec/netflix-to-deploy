import React from 'react'
import './Header';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixLogo from '../../assets/images/image.png'

function Header() {
  return (
    <>
    <div className='header_main'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse By Language</li>
                </ul>

            </div>
            <div className='header-right'>
              <ul>
                <li><SearchIcon/></li>
                <li>< CircleNotificationsIcon/></li>
                <li><AccountCircleIcon/></li>
                <li><ArrowDropDownIcon/></li>
              </ul>

            </div>

        </div>
    </div>
    </>
  )
}

export default Header
