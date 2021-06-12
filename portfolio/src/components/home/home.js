import React, { useEffect, useRef, useState } from 'react';

import Typed from 'typed.js';
import FOG from 'vanta/dist/vanta.fog.min';
import Parallax from 'parallax-js';
import * as THREE from 'three';

import './home.css';

const Home = () => {
    const [vantaFog, setVantaFog] = useState(0);
    const vantaRef = useRef(null)
    const typedRef = useRef();
    const parallaxRef = useRef();

    const options = {
        strings: [
            'a Software Engineer',
            'an RPA Developer and Consultant',
            'a Data Science Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 80,
        loop: true,
        loopCount: Infinity,
        smartBackspace: true
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
        if (!vantaFog) {
            setVantaFog(FOG({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                highlightColor: 0xa78be1,
                midtoneColor: 0x6d7ede,
                lowlightColor: 0x66e1cb,
                baseColor: 0x541ed7,
                blurFactor: 0.5,
                speed: 2.00,
                zoom: 2.00,
                THREE
            }));
        }
        return () => {
            if (vantaFog) vantaFog.destroy();
        }
    }, [vantaFog]);

    return (
        <div className="home-page" ref={vantaRef}>
            <div className="page-content" ref={parallaxRef} data-relative-input="true">
                <div className="main-text" data-depth="0.3">
                    <p>
                        Hi
                        <br />
                        My name is
                        <span className="name-text">Vasundhara Sharma</span>
                        and I'm
                    </p>
                    <div className="typing-text">
                        <span ref={typedRef}></span>
                    </div>
                </div>
                <div className="background-image" data-depth="0.9"></div>
            </div>
        </div>
    );
}

export default Home;
