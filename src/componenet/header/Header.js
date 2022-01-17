import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '..';
import "./Header.css";

function Header() {
    const [active, setActive] = useState("/");
    
    useEffect(() => {
        handleActive();
    }, [])

    const handleActive = () => {
        setActive(window.location.pathname)
    } 

    return (
        <div className='header'>
            <nav className='header__nav'>
                <div>
                    <Link className='header__logo' to="/">Pet<span>Land</span></Link>
                </div>

                <div className='header__links'>
                    <Link onClick={() => setActive("/")} className={active !== "/" ? 'header__link' : 'header__link active__link'} to="/">Home</Link>
                    {/* <Link onClick={() => setActive("/about")} className={active !== "/about" ? 'header__link' : 'header__link active__link'} to="/about">About</Link> */}
                    <Link onClick={() => setActive("/contact")} className={active !== "/contact" ? 'header__link' : 'header__link active__link'} to="/contact">Contact</Link>
                    <Link onClick={() => setActive("/blog")} className={active !== "/blog" ? 'header__link' : 'header__link active__link'} to="/blog">Blog</Link>
                </div>
                <div>
                    <Link onClick={() => setActive("/adopt")} className={active !== "/adopt" ? 'header__link' : "header__link active__link"} to="/adopt">Adopt Now</Link>
                </div>
            </nav>

            <div className='menu'>
                <Dropdown />
            </div>
        </div>
    )
}

export default Header
