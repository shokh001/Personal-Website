import React from 'react'
import currencyConventer from '../../assets/images/currencyConventer.png'
import '../Work/work.scss'
import './workTwo.scss'

const WorkTwo = () => {
    return (
        <div className="work workTwo experience">
            <div className="container">

                <div className="wrapper-project">
                    <a target='_blank' rel="noreferrer" href='https://shokh-currency-conventer.netlify.app/' className="project-img" style={{ right: '0' }}>
                        <img src={currencyConventer} alt="" />
                    </a>
                    <div className="project-content" style={{ marginLeft: '0', textAlign: 'left' }}>
                        <div>
                            <h5>Featured Project</h5>
                            <a target='_blank' rel="noreferrer" href='https://shokh-currency-conventer.netlify.app/'>Currency Converter</a>

                            <div className="project-card">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda beatae laboriosam, necessitatibus tempora eveniet officiis maxime, asperiores hic ab eligendi reprehenderit. Iure ducimus dolores vero perspiciatis natus, esse sunt.
                            </div>
                            <ul style={{ justifyContent: 'flex-start' }}>
                                <li>HTML</li>
                                <li>Sass</li>
                                <li>React</li>
                            </ul>

                            <div className="project-link">
                                <a target='_blank' rel="noreferrer" href="https://github.com/shokh001/Currency-Converter"><i className="fab fa-github"></i></a>
                                <a target='_blank' rel="noreferrer" href="https://shokh-currency-conventer.netlify.app/"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkTwo
