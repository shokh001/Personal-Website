import React from 'react'
import fanabi from '../../assets/images/fanabi.png'
import './work.scss'

const Work = () => {
    return (
        <div className="work experience" id='work'>
            <div className="container">
                <h2>
                    <span>03.</span>
                    Some Things I’ve Built
                    <div className='line'></div>
                </h2>

                <div className="wrapper-project">
                    <a href='https://github.com/shokh001/FANABI' className="project-img">
                            <img src={fanabi} alt="" />
                    </a>
                    <div className="project-content">
                        <h5>Featured Project</h5>
                        <a href='https://github.com/shokh001/FANABI'>Fanabi</a>

                        <div className="project-card">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda beatae laboriosam, necessitatibus tempora eveniet officiis maxime, asperiores hic ab eligendi reprehenderit. Iure ducimus dolores vero perspiciatis natus, esse sunt.
                        </div>
                        <ul>
                            <li>HTML</li>
                            <li>Sass</li>
                            <li>React</li>
                        </ul>

                        <div className="project-link">
                            <a href="https://github.com/shokh001/FANABI"><i className="fab fa-github"></i></a>
                            <a href="/#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
