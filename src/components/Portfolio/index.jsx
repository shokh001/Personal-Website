import React, { useState } from "react";
import { PortfolioData } from '../../mock/data'
import './portfolio.scss'

const Portfolio = () => {
    const [dnone, setDnone] = useState(6);
    const [btnShow, setBtnShow] = useState(false);

    const btnLess = () => {
        setBtnShow(false);
        setDnone(6)
    }

    const btnMore = () => {
        setBtnShow(true);
        setDnone(PortfolioData.length + 1)
    }

    return (
        <div className="portfolio experience">
            <div className="container">
                <h1>Other Projects</h1>
                <a target='_blank' rel="noreferrer" href='https://github.com/shokh001?tab=repositories' className='archive'>view the archive</a>

                <div className="card-wrapper">
                    {
                        PortfolioData.map(({ id, title, link, descr, technology_1, technology_2, technology_3 }) => {
                            return (
                                <div
                                    className={dnone >= id ? 'card' : 'card dnone'}
                                    key={id}
                                >
                                    <div className="links">
                                        <i className="far fa-folder"></i>
                                        <div className="github">
                                            <a target='_blank' rel="noreferrer" href={link}><i className="fab fa-github"></i></a>
                                            <a href="/#" className='external_link'><i className="fas fa-external-link-alt"></i></a>
                                        </div>
                                    </div>

                                    <h3>{title}</h3>

                                    <p>{descr}</p>

                                    <ul>
                                        <li>{technology_1}</li>
                                        <li>{technology_2}</li>
                                        <li>{technology_3}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="btn" style={{ display: btnShow && 'none' }} onClick={btnMore}>
                    Show more
                </div>
                <div className="btn" style={{ display: !btnShow && 'none' }} onClick={btnLess}>
                    Show less
                </div>
            </div>
        </div>
    );
}

export default Portfolio;