import React, { useState, useEffect } from 'react'
import './navbar.scss'

const Navbar = () => {

    const [active, setActive] = useState(0);
    const [nav, setNav] = useState(false);
    const [addClass, setAddClass] = useState('navbar');

    const disableScrolling = () => {
        setNav(true);
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, y); };
    }
    
    const enableScrolling = () => {
        setNav(false);
        let lastScrollTop = 0;
        window.onscroll = () => {
            var st = window.pageYOffset;

            if (st >= 100) {
                setAddClass('navbar navTop');
            }
            if (st <= lastScrollTop) {
                setAddClass('navbar showNavbar')
            } 
            if (st < 100) {
                setAddClass('navbar')
            }

            lastScrollTop = st <= 0 ? 0 : st;
        }
    }
    
    useEffect(() => {    
        enableScrolling()
    }, []);


    return (
        <div className={addClass}>
            <div className='container'>
                <a href='/' className="logo">
                    <span>
                        Shokh
                    </span>
                    <i className="fas fa-crown"></i>
                </a>

                <div className="links" style={{ transform: nav && 'translateX(0%)' }}>
                    <div className="times" onClick={enableScrolling}>
                        <div className="line_1"></div>
                        <div className="line_2"></div>
                    </div>
                    <ul>
                        <li><a href="#about" onClick={() => setActive(1)} style={{ border: active === 1 && '2px dashed #64ffda' }}> <span>01.</span> About</a></li>
                        <li><a href="#experience" onClick={() => setActive(2)} style={{ border: active === 2 && '2px dashed #64ffda' }}> <span>02.</span> Experience</a></li>
                        <li><a href="#work" onClick={() => setActive(3)} style={{ border: active === 3 && '2px dashed #64ffda' }}> <span>03.</span> Work</a></li>
                        <li><a href="#contact" onClick={() => setActive(4)} style={{ border: active === 4 && '2px dashed #64ffda' }}> <span>04.</span> Contact</a></li>
                    </ul>

                    <a className='btn' href="/">Resume</a>
                </div>

                <div className="burger" onClick={disableScrolling}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
