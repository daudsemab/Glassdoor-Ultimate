import React from 'react'

import './Card.css'

export default function Card({name, email, age, experience, picture, phone, location}) {
    let full_name = `${name.first} ${name.last}`;
    let address = `${location.city}, ${location.state}`;
    return (
        <div className='card'>
            <div>
                <img className='pic-of-emplayee' alt='Pic Of Employee' src={picture}></img>
                <h3>{`${full_name}`}</h3>
                <p>{email}</p>
            </div>
            <p className='main-para'>{`Hi, My name is ${full_name}. I'm Web Deveoper with ${experience} years of experience. I'm ${age} years old. I'm from ${address}. I live in ${location.city}. I'm jobless right now. Please hire me. At least contact me.`}</p>
            <ul>
                        <li>Phone: {phone}</li>
            </ul>
            <button className='hire-btn'>Interview</button>
        </div>
    )
}
