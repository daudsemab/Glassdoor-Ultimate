import React from 'react'
import { motion } from 'framer-motion'

import "./Header.css"


export default function Header() {
    return (
        <div className='Header' id='top'>
            <motion.header 
            className='sticky-header'
            initial={{
                opacity : 0,
                y : -10
            }}
            animate={{
                opacity : 1,
                y : 0
            }}
            transition={{
                duration : 1,
                ease: "easeInOut"
            }}
            >
                <h2 className='logo-font'>glassdoor <span>ultimate</span></h2>
                <a className='find-btn above-750' href='../Filter/Filter.jsx#Filter'>FIND EMPLOYEE</a>
            </motion.header>
            <motion.div className='middle-part'
            initial={{
                opacity : 0,
                y : 10
            }}
            animate={{
                opacity : 1,
                y : 0
            }}
            transition={{
                delay : 0.5,
                duration : 1,
                ease: "easeInOut"
            }}
            >
                <h1>Find the employee that <br className='under-410' />fits your business</h1>
                <a className='find-btn under-750' href='../Filter/Filter.jsx#Filter'>FIND EMPLOYEE</a>
                <div>
                    <div className='middle-paras-container'>
                        <p className='middle-para'>Best employee for your company</p>
                        <p className='middle-para'>All over the world</p>
                        <p className='middle-para'>Find now</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
