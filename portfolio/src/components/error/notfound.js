import React, { useEffect, useRef, useState } from 'react';

import Parallax from 'parallax-js';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';

import './notFound.css';

const NotFound = () => {
    const [vantaBirds, setVantaBirds] = useState(0);
    const vantaRef = useRef(null)
    const parallaxRef = useRef();

    useEffect(() => {
        const parallax = new Parallax(parallaxRef.current);
        return () => {
            parallax.destroy();
        }
    }, [parallaxRef]);

    useEffect(() => {
        if (!vantaBirds) {
            setVantaBirds(BIRDS({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0xffffff,
                color1: 0x2953dc,
                color2: 0xff004b,
                birdSize: 1.50,
                wingSpan: 35.00,
                separation: 50.00,
                alignment: 50.00,
                cohesion: 50.00
            }));
        }
        return () => {
            if (vantaBirds) vantaBirds.destroy();
        }
    }, [vantaBirds]);

    return (
        <div className="error-page" ref={vantaRef}>
            <div className="nav-flash"></div>
            <div className="main-content" ref={parallaxRef} data-relative-input="true">
                <div className="main-text" data-depth="0.4">
                    <p>
                        Oh!, 404 page is for my birds
                        <br />
                        So don't disturb my birds and leave them alone
                    </p>
                </div>
                <div className="background-image-404" data-depth="0.9"></div>
            </div>
        </div>
    );
}

export default NotFound;
