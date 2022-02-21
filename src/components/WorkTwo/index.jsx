import React from 'react'
import movieApp from '../../assets/images/movieApp.png'
import '../Work/work.scss'
import './workTwo.scss'

const WorkTwo = () => {
    return (
        <div className="work workTwo experience">
            <div className="container">

                <div className="wrapper-project">
                    <a target='_blank' rel="noreferrer" href='https://movie-website-react-app.netlify.app/' className="project-img" style={{ right: '0' }}>
                        <img src={movieApp} alt="" />
                    </a>
                    <div className="project-content" style={{ marginLeft: '0', textAlign: 'left' }}>
                        <div>
                            <h5>Featured Project</h5>
                            <a target='_blank' rel="noreferrer" href='https://movie-website-react-app.netlify.app/'>Movie React App</a>

                            <div className="project-card">
                                The movie website is for watching your favorite movie and new premiere
                            </div>
                            <ul style={{ justifyContent: 'flex-start' }}>
                                <li>React</li>
                                <li>Css & Material UI</li>
                                <li>Redux</li>
                            </ul>

                            <div className="project-link">
                                <a target='_blank' rel="noreferrer" href="https://github.com/shokh001/MovieWebsite"><i className="fab fa-github"></i></a>
                                <a target='_blank' rel="noreferrer" href="https://movie-website-react-app.netlify.app/"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkTwo
