import React from 'react';
import { Transition } from 'react-spring/renderprops';
import { config } from 'react-spring';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Intro from './Intro';
import Project from './Project';
import Contact from './Contact';
import Blog from './Blog';
import PostList from './Post';

const Main = ({ mouseEnter, mouseLeave }) => {
  return (
    <main>
      <Router>
        <Route
          render={({ location, ...rest }) => {
            return (
              <>
                <Route exact path='/' render={() => <Redirect to='/home' />} />
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
                  config={{ ...config.molasses, duration: 500 }}
                >
                  {(loc, state) => style => (
                    <Switch location={state === 'update' ? location : loc}>
                      <Route
                        path='/home'
                        render={props =>
                          Intro({ ...props, style, mouseEnter, mouseLeave })
                        }
                      />
                      <Route
                        path='/projects'
                        render={props =>
                          Project({ ...props, style, mouseEnter, mouseLeave })
                        }
                      />
                      <Route
                        path='/contact'
                        render={props =>
                          Contact({ ...props, style, mouseEnter, mouseLeave })
                        }
                      />
                      <Route
                        path='/blog'
                        render={props =>
                          Blog({ ...props, style, mouseEnter, mouseLeave })
                        }
                      />
                      <Route
                        exact
                        path='/post/:id'
                        render={props => <Blog {...props} />}
                      />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  )}
                </Transition>
              </>
            );
          }}
        />
        <div>
          <PostList />
        </div>
      </Router>
    </main>
  );
};

export default Main;
