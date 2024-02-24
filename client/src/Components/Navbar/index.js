import {useState} from 'react';
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';
import LoginPopup from '../LoginPopup/index.js';
import Button from '@mui/material/Button';
import './index.css';

const Navbar = () => {
    const [onClickHam, setOnClickHam] = useState(false);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);

    const onClickHamburger = () => {
        setOnClickHam(prevState => !prevState);
    }

    const handleLoginClick = () => {
        setIsLoginPopupOpen(true);
    };

    const handleSignupClick = () => {
        setIsSignupPopupOpen(true);
    };

    const handleClosePopup = (isLogin) => {
        if (isLogin) {
            setIsLoginPopupOpen(false);
        } else {
            setIsSignupPopupOpen(false);
        }
    };

return (
    <header>
    <nav className='nav-container fixed-top'>
        <Link to='/'>
            <img src='https://res.cloudinary.com/djbs4yqbz/image/upload/v1708089542/cloudcodelogo_wmrcvo.jpg' alt="logo" className='nav-logo' />
        </Link>
        <div className="nav-search-container">
            <input type="search" className='nav-search-input' placeholder='Search'/>
            <button className="nav-search-button">
                <IoIosSearch size={20} color="gray"/>
            </button>
        </div>
        <ul className='nav-ul'>
            <Link to='/courses' className='nav-link'><li className='nav-li'>Courses</li></Link>
            <Link to='/careers' className='nav-link'><li className='nav-li'>Careers</li></Link>
            <Link to='/aboutus' className='nav-link'><li className='nav-li'>About Us</li></Link>
        </ul>
        <div className='nav-lg-login'>
            <Button onClick={handleLoginClick}>Login</Button>
            <Button onClick={handleSignupClick}>Sign Up</Button>

            {isLoginPopupOpen && (
                <LoginPopup isLogin={true} onClose={() => handleClosePopup(true)} />
                )}
            {isSignupPopupOpen && (
                <LoginPopup isLogin={false} onClose={() => handleClosePopup(false)} />
                )}
        </div>
    </nav>
    <nav className="nav-for-samlldevices fixed-top">
        <div className="nav-sm-container">
            <Link to='/'>
                <img src='https://res.cloudinary.com/djbs4yqbz/image/upload/v1708089542/cloudcodelogo_wmrcvo.jpg' alt="logo" className='nav-logo' />
            </Link>
            <button type="button" className="hamburger-button" onClick={onClickHamburger}>
                <GiHamburgerMenu size={20} color="#5755d9"/>
            </button>
        </div>
        <div className='nav-sections-tab'>
            {onClickHam ? (
                <div className="nav-search-container">
                    <input type="search" className='nav-search-input' placeholder='Search'/>
                    <button className="nav-search-button">
                        <IoIosSearch size={20} color="gray"/>
                    </button>
                </div>
            ):(
                <div>
                    <ul className='nav-ul'>
                        <Link to='/courses' className='nav-link'><li className='nav-li'>Courses</li></Link>
                        <Link to='/careers' className='nav-link'><li className='nav-li'>Careers</li></Link>
                        <Link to='/aboutus' className='nav-link'><li className='nav-li'>About Us</li></Link>
                    </ul>
                    <div className='nav-sm-login'>
                        <Button onClick={handleLoginClick}>Login</Button>
                        <Button onClick={handleSignupClick}>Sign Up</Button>

                        {isLoginPopupOpen && (
                            <LoginPopup isLogin={true} onClose={() => handleClosePopup(true)} />
                        )}
                        {isSignupPopupOpen && (
                            <LoginPopup isLogin={false} onClose={() => handleClosePopup(false)} />
                        )}
                    </div>
                </div>
            )}
        </div>
  </nav>
  </header>
)

}

export default Navbar
