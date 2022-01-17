import React from 'react';
import "./styles.css";
import { Footer, Header, Homebar } from '../componenet';
import DogImage from "../images/dogfamily.png";
import DogIamge2 from "../images/mandog.jpg";
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='homepage'>
            <Header />
            <section className='homepage__container'>
                <div className='homepage__div'>
                    <div className='homepage__tagline'>
                        <h4 className='tagline__h4'>An Extra Soul to Love</h4>
                        <p className='tagline__p'>Adopt a pet and find a soul to give and recieve unconditional love from. 
                            See our collection of adorable pets that are ready to recieve and give some love.
                        </p>
                        <Link to="/adopt" className='tagline__link'>Get Started</Link>
                    </div>
                    <div>
                        <img className='homepage__img' src={DogImage} alt="Pets" />
                    </div>
                </div>

                <div className='homepage__bar'>
                    <div>
                        <Homebar />
                    </div>
                </div>

                <div className='homepage__mid'>
                    <div>
                        <h4 className='bar__h4'>Get Personalized Pet Matches</h4>
                        <p className='bar__p'>Answer a few quick questions to see your perfect matchs on PetLand 
                        <Link to="/"> Take Test</Link></p>
                    </div>
                    <img className='mid__img' src={DogIamge2} alt="Walking Dog" />
                    <div>
                        <h4>Find The Right Pet</h4>
                        <p>Are you active, quiet, relaxed or shy</p>
                        <p>Adopt a pet for that would suit your lifestyle and personality. While also providing a home for our pets. </p>

                        <Link className='link' to="/">Adopt Now</Link>
                    </div>
                </div>

                <div className='homepage__footer'>
                    <Footer />
                </div>
            </section>

            
        </div>
    )
}

export default HomePage
