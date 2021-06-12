import React, { useEffect, useRef, useState } from 'react';

import Parallax from 'parallax-js';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';
import Typed from 'typed.js';

import './about.css';

const About = () => {
    const [vantaWaves, setVantaWaves] = useState(0);
    const vantaRef = useRef(null)
    const typedRef = useRef();
    const parallaxRef = useRef();

    const options = {
        strings: [`
            <div class="first-para">From being terrified of coding during my initial years at college to working in the Information Technology industry
            and writing code for most parts of my day, my journey with technology has been wonderful!</div>
            ^500<br />
            <div class="second-para">I am a certified RPA developer by UiPath, with 2+ yrs of experience in developing and orchestrating automation.
            I am skilled in developing automation using APIs, web &amp; desktop applications, and VBA macro.
            I can create custom activities/packages to enhance the automation solution design and have also built components for the RPA Community.
            I am also trained in MongoDB, Python, Oracle FMW, Oracle ADF, and SOA.
            Reach out if you want to know more about my work or need guidance in UiPath RPA!</div>
            ^500<br />
            <div class="third-para">I am highly interested in Data Science. I am proficient in Python and currently learning R, Tableau, and Power BI.
            I am working on a few data science projects using Python. In my free time,
            I also experiment with front-end development, and this is the perfect example to showcase that.</div>
        `],
        typeSpeed: 10,
        showCursor: false,
    };

    useEffect(() => {
        const type = new Typed(typedRef.current, options);
        const parallax = new Parallax(parallaxRef.current);
        return () => {
            type.destroy();
            parallax.destroy();
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!vantaWaves) {
            setVantaWaves(WAVES({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3d45bc,
                shininess: 50.00,
                waveHeight: 15.00,
                THREE
            }));
        }
        return () => {
            if (vantaWaves) vantaWaves.destroy();
        }
    }, [vantaWaves]);

    return (
        <div className="about-page" ref={vantaRef}>
            <div className="about-content" ref={parallaxRef} data-relative-input="true">
                <div className="about-text" data-depth="0.3">
                    <div className="typing-text">
                        <span ref={typedRef}></span>
                    </div>
                    {/* <div className="about-text-shadow">
                        <div>
                            <p className="first-para">
                                From being terrified of coding during my initial years at college to working in the Information Technology industry
                                and writing code for most parts of my day, my journey with technology has been wonderful!
                            </p>
                            <br />
                            <p className="second-para">
                                I am a certified RPA developer by UiPath, with 2+ yrs of experience in developing and orchestrating automation.
                                I am skilled in developing automation using APIs, web &amp; desktop applications, and VBA macro.
                                I can create custom activities/packages to enhance the automation solution design and have also built components for the RPA Community.
                                I am also trained in MongoDB, Python, Oracle FMW, Oracle ADF, and SOA.
                                Reach out if you want to know more about my work or need guidance in UiPath RPA!
                            </p>
                            <br />
                            <p className="third-para">
                                I am highly interested in Data Science. I am proficient in Python and currently learning R, Tableau, and Power BI.
                                I am working on a few data science projects using Python. In my free time,
                                I also experiment with front-end development, and this is the perfect example to showcase that.
                            </p>
                        </div>
                    </div> */}
                </div>
                <div className="about-background-image" data-depth="0.9"></div>
            </div>
        </div>
    );
}

export default About;
