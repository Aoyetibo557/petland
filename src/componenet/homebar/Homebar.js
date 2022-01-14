import React, { useState} from 'react';
import "./Homebar.css";
import { GiSittingDog, GiHollowCat } from "react-icons/gi"
import { Link } from 'react-router-dom';

function Homebar() {
    const [input, setInput] = useState("");

    
    return (
        <div className='homebar'>
            <input className='homebar__input' type="text" name="userlocation" value={input} onInput={(e) => setInput(e.target.value)} placeholder='Enter City, State, or Zip'/>
            <Link to={`/adopt/${input}`} className='homebar__btn'>
                <GiSittingDog />
                Find a dog
            </Link>
            <Link to={`/adopt/${input}`} className='homebar__btn'>
                <GiHollowCat />
                Find a cat
            </Link>
            <Link to={`/adopt/${input}`} className='homebar__btn'>
                Find other pets
            </Link>
        </div>
    )
}

export default Homebar
