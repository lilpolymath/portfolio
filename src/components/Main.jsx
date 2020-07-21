import React, { useState } from 'react';
import { animated, useTransition, config } from 'react-spring';

import Intro from './Intro';
import Project from './Project';

const AnimatedIntro = animated(Intro);
const AnimatedProject = animated(Project);

const Main = () => {
  const [active, setActive] = useState('about');
  const transitions = useTransition(active, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  return (
    <main>
      {transitions.map(({ item, key, props }) =>
        active ? (
          <AnimatedIntro
            key={key}
            active={active}
            setActive={setActive}
            style={props}
          />
        ) : (
          <AnimatedProject
            key={key}
            active={active}
            setActive={setActive}
            style={props}
          />
        )
      )}
    </main>
  );
};

export default Main;
