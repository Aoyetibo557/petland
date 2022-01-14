import React from 'react';
import "./Pet.css";
import { Markup } from 'interweave';

function Pet({id, name, sex, pic, age, color, descp,species_name, breed_name, center }) {
    const c = descp;
    return (
        <button className='pet' key={id}>
            <div>
                <img className='pet__img' src={pic} alt={name} />
            </div>
            <div className='pet__info'>
                <h4 className='pet__name'>{name}</h4>
                <div className='tags__div'>
                    <p className='pet__tags'>{sex && sex}</p>
                    <p className='pet__tags'>{age}</p>
                    <p className='pet__tags'>{color === "" ? color : "" }</p>
                </div>
            </div>

            <div>
                {descp.match("<img") ? ("No Description Found!") : (
                    <Markup className='pet__descp' content={c} />
                )}
            </div>

            <div className='tags__div'>
                {/* tags */}
                <p className='pet__tags'>{species_name}</p>
                <p className='pet__tags'>{breed_name}</p>
            </div>
        </button>
    )
}

export default Pet
