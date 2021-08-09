import React, { useState } from "react";
import { CompaniesData } from '../../mock/data'
import './experience.scss'

const Experience = () => {
    const [active, setActive] = useState(1);

    return (
        <div className="experience" id='experience'>
            <div className="container">
                <h2>
                    <span>02.</span>
                    Where I’ve Worked
                </h2>
                <div className="wrapper-section">
                    <div className="left-section">
                        <ul>
                            {
                                CompaniesData.map(({ id, title }) => {
                                    return (
                                        <li key={id}>
                                            <span
                                                onClick={() => setActive(id)}
                                                className={(active === id)? 'active': ''}
                                            >
                                                {title}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="right-section">
                        {
                            CompaniesData.map(({ id, about_, link_, title, date, descr_1, descr_2 }) => {
                                return (
                                    active === id &&
                                    <div key={id} className='card'>
                                        <h4>{about_} <span>@</span> <a href={link_}> {title}</a></h4>
                                        <h5>{date}</h5>
                                        <p>{descr_1}</p>
                                        <p>{descr_2}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;