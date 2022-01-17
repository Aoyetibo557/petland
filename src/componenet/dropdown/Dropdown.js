import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dropdown.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { GrClose } from "react-icons/gr"
import AOS from "aos";
import "aos/dist/aos.css";




function Dropdown() {
    const [showMenu, setShowMenu] = useState(false);
    // const [ prevScrollPos, setPreveScrollPos] = useState(0);

    // const handleScroll = () => {
    //     // find current scroll position
    //     const currentScrollPos = window.pageYOffset;

    //     setShowMenu((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    //     setPreveScrollPos(currentScrollPos);

    // }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease"
        })
    }, []);

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [prevScrollPos, showMenu,handleScroll]);

   


    return (
        <div>
            <nav className='dropdown__nav'>
                <div>
                    <Link className='header__logo' to="/">Pet<span>Land</span></Link>
                </div>

                {!showMenu ? (
                    <div  className='dropdown__bar'>
                        <HiOutlineMenuAlt4 onClick={() =>setShowMenu(!showMenu)} />
                    </div>
                ): (
                    <div  data-aos-duration="2000" className='dropdown__bar dropdown__bar-spin'>
                        <GrClose onClick={() =>setShowMenu(!showMenu)} />
                    </div>
                )}
                

                <div className={!showMenu ? 'hide' : 'dropdown__links'}>
                    <Link onClick={() => setShowMenu(false)} className= 'header__link' to="/">Home</Link>
                    <Link onClick={() => setShowMenu(false)} className='header__link' to="/contact">Contact</Link>
                    <Link onClick={() => setShowMenu(false)} className='header__link' to="/blog">Blog</Link>
                    <Link onClick={() => setShowMenu(false)} className='header__link' to="/adopt">Adopt Now</Link>

                </div>
            </nav>
        </div>
    )
}

export default Dropdown
