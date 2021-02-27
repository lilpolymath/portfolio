import React from 'react';
import { config } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import { Switch, Route } from 'react-router-dom';

import Post from './Post';
import Blog from './Blog';
import Intro from './Intro';
import Project from './Project';
import Contact from './Contact';
import GoogleAnalytics from '../utils/analytics';

const Main = ({ mouseEnter, mouseLeave }) => {
  return (
    <main>
      <Route
        render={({ location, ...rest }) => {
          return (
            <Transition
              native
              items={location}
              keys={location.pathname.split('/')[1]}
              from={{
                transform: 'translateY(200px)',
                opacity: 0,
                position: 'absolute',
              }}
              enter={{
                transform: 'translateY(0px)',
                opacity: 1,
                position: 'relative',
              }}
              leave={{
                transform: 'translateY(-200px)',
                opacity: 0,
                position: 'absolute',
              }}
              config={{ ...config.molasses, duration: 750 }}
            >
              {(loc, state) => style => (
                <Switch location={state === 'update' ? location : loc}>
                  <Route exact path='/'>
                    <Intro
                      style={style}
                      mouseEnter={mouseEnter}
                      mouseLeave={mouseLeave}
                    />
                  </Route>
                  <Route exact path='/projects'>
                    <Project
                      style={style}
                      mouseEnter={mouseEnter}
                      mouseLeave={mouseLeave}
                    />
                  </Route>
                  <Route exact path='/contact'>
                    <Contact
                      style={style}
                      mouseEnter={mouseEnter}
                      mouseLeave={mouseLeave}
                    />
                  </Route>
                  <Route exact path='/blog'>
                    <Blog
                      style={style}
                      mouseEnter={mouseEnter}
                      mouseLeave={mouseLeave}
                    />
                  </Route>
                  <Route exact path='/post/:id'>
                    <Post
                      style={style}
                      mouseEnter={mouseEnter}
                      mouseLeave={mouseLeave}
                    />
                  </Route>
                  <Route render={() => <div style={style}>Not Found</div>} />
                </Switch>
              )}
            </Transition>
          );
        }}
      />
      {process.env.NODE_ENV === 'development' ? null : <GoogleAnalytics />}
    </main>
  );
};

export default Main;
