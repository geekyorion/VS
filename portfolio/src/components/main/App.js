import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Routing from './../routing';
import './App.css';

const App = () => {
    const setFullScreen = () => {
        if (window.document.body.requestFullscreen) {
            window.document.body.requestFullscreen();
        } else if (window.document.body.webkitRequestFullscreen) {
            window.document.body.webkitRequestFullscreen();
        } else if (window.document.body.msRequestFullscreen) {
            window.document.body.msRequestFullscreen();
        }
    }

    const exitFullScreen = () => {
        if (window.document.exitFullscreen) {
            window.document.exitFullscreen();
        } else if (window.document.webkitExitFullscreen) {
            window.document.webkitExitFullscreen();
        } else if (window.document.msExitFullscreen) {
            window.document.msExitFullscreen();
        }
    }

    const toggleFullScreen = () => {
        const isFullScreen = localStorage.getItem('isFullScreen');
        if (isFullScreen === 'true') {
            exitFullScreen();
        } else {
            setFullScreen();
        }
        localStorage.setItem('isFullScreen', isFullScreen !== 'true');
        window.document.body.classList.toggle('fullscreen-active');
    }

    useEffect(() => {
        return () => {
            localStorage.removeItem('isFullScreen');
        }
    }, []);

    return (
        <>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/skills">Skills</Link>
                <Link className="link" to="/about">About</Link>
            </div>
            <Routing />
            <div className="fullscreen" onClick={toggleFullScreen} title="Toggle Full Screen">
                <div className="boxes box1"></div>
                <div className="boxes box2"></div>
                <div className="boxes box3"></div>
                <div className="boxes box4"></div>
            </div>
        </>
    );
}

export default App;
