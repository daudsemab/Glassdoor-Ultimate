import React from 'react'

import './Footer.css'

export default function Footer() {
    return (
        <div id='Footer-container'>
            <div className='arrow-gh-star' >
                <a href='../Header/Header.jsx#top' ><abbr title='Go to Top'>^</abbr></a>
                <iframe title='star' src="https://ghbtns.com/github-btn.html?user=daudsemab&repo=Glassdoor-Ultimate&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            </div>
            <div className='explore-glassdoor'>
                <h2>Explore Glassdoor <span className='ultimate'>ultimate</span></h2>
                <p>Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on Glassdoor today.</p>
            </div>
            <div className='footer-description-container'>
                <div className='description-package'>
                    <h3>Glassdoor</h3>
                    <ul className='ul' >
                        <li className='li' >About</li>
                        <li className='li' >Awards</li>
                        <li className='li' >Research</li>
                        <li className='li' >Guides</li>
                    </ul>
                </div>
                <div className='description-package'>
                    <h3>Employers</h3>
                    <ul className='ul' >
                        <li className='li' >Get a Free Employer Account</li>
                        <li className='li' >Employer Center</li>
                        <li className='li' >Post a Job</li>
                        <li className='li' >Do Not Sell</li>
                    </ul>
                </div>
                <div className='description-package'>
                    <h3>Community</h3>
                    <ul className='ul' >
                        <li className='li' >Help</li>
                        <li className='li' >Guidelines</li>
                        <li className='li' >Terms of Use</li>
                        <li className='li' >Privacy Center</li>
                    </ul>
                </div>
                <div className='description-package'>
                    <h3>Work With Us</h3>
                    <ul className='ul' >
                        <li className='li' >Job Boards</li>
                        <li className='li' >Advertisers</li>
                        <li className='li' >Developers</li>
                        <li className='li' >Careers</li>
                    </ul>
                </div>
            </div>
            <div className='para-github-star' >
                <p>Copyright &copy;2020 Glassdoor Ultimate developed by Daud Semab.</p>
            </div>
        </div>
    )
}