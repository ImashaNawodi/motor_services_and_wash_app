import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/main.css';

export default function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    return (
        <header>
            <h1>MotoCare Group of Company</h1>
            <nav ref={navRef}>
                <a href='/'>HomePage</a>
                <a href ='/contacts'>Contacts</a>
                <a href="/operatinghours">Operating Hours</a>
                <a href="/locations">Locations</a>
                <a href='/services'> Services</a>
                <a href='/offers'> Offers</a>
                <a href='/signin'>Sign In</a>
                <a href='/signup'>Sign Up</a>
                <a href='/profile'>Profile</a>

                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                      <FaTimes />
              </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
              <FaBars />
        </button>

        </header>
    );
}