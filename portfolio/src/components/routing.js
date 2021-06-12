import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

import './common.css';

import About from './about/about';
import AppContext from './context/AppContext';
import NotFound from './error/notfound';
import Home from './home/home';
import Skills from './skills/skills';

const Routing = () => {
    const { preset, enterAnimation, exitAnimation } = useContext(AppContext);

    return (
        <>
            <Route
                render={({ location }) => {
                    return (
                        <PageTransition
                            preset={preset}
                            enterAnimation={enterAnimation}
                            exitAnimation={exitAnimation}
                            transitionKey={location.pathname}
                        >
                            <div className="wrapper">
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/about" component={About} />
                                    <Route exact path="/skills" component={Skills} />
                                    <Route exact path="/*" component={NotFound} />
                                </Switch>
                            </div>
                        </PageTransition>
                    )
                }}
            />
        </>
    );
}

export default Routing;
