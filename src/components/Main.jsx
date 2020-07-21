import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import { animated, useTransition, config } from 'react-spring';

import Intro from './Intro';
import Project from './Project';

const AnimatedIntro = animated(Intro);
const AnimatedProject = animated(Project);

console.log(AnimatedIntro);

const Main = () => {
  const [active, setActive] = useState(true);

  return (
    <main>
      <Transition
        items={active}
        from={{
          transform: active
            ? 'translate3d(-50%,100%,0)'
            : 'translate3d(50%,0,0)',
          opacity: 0,
          position: "absolute"
        }}
        enter={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
        leave={{
          transform: active
            ? 'translate3d(50%,0,0)'
            : 'translate3d(-50%,100%,0)',
          opacity: 0,
        }}
        config={{ ...config.molasses, duration: 1000 }}
      >
        {active =>
          active
            ? props => (
                <AnimatedIntro
                  active={active}
                  setActive={setActive}
                  style={props}
                />
              )
            : props => (
                <AnimatedProject
                  active={active}
                  setActive={setActive}
                  style={props}
                />
              )
        }
      </Transition>
    </main>
  );
};

export default Main;
