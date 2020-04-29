import React from 'react'

import './Illustration.css'

export default function Illustration() {
    return (
        <div className='illustration-container'>
            <div className='para'>
                <p><strong className='important'>Best</strong> place to find best employee for your business.</p>
            </div>
            <div className='image-container'>
                <img alt='illustration-pic' className='img' src= {require('./ipic.png')} />
            </div>
        </div>
    )
}
