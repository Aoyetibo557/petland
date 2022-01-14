import React, {useState, useEffect} from 'react'
import { Header, Portal } from '../componenet'
import Aos from "aos"
import "aos/dist/aos.css";

function AdoptPage() {
    const [welcome, setWelcome] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease"
        })

    }, [])
    useEffect(() => {
        setTimeout(() => {
            setWelcome(true)
        },6000)
    },[])
    return (
        <div className='adoptpage'>
            <Header />
            
            {!welcome ? (
                <div data-aos="zoom-in-up" data-aos-duration="2000" className='adoptpage__welcome'>
                    <h4>Hello There</h4>
                    <p>Welcome to Our Adoption Protal</p>
                    <p>Pet Adoption Made Easy!</p>
                </div>
            ): (
                <div className='adoptpage__portal' data-aos="fade-down" data-aos-duration="2000">
                    <Portal />
                </div>
            )}
            
        </div>
    )
}

export default AdoptPage
