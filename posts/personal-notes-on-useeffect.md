---
layout: blog
title: Personal Notes on useEffect
date: 2020-08-24T17:49:38.913Z
thumbnail: /image/react-hook.png
tags: React, React Hooks
slug: personal-notes-on-use-effect
---

# In the Beginning...

The useEffect hook takes two parameters. The first parameter is a function that gets runs when the useEffect is triggered by some change, the presence of the second parameter is conditional.

You call the hook by passing a function that you want to run when a particular change occurs and this is determined by the presence of the second parameter mentioned above.

1. If the second parameter is empty e.g

```js
useEffect(() => {
  console.log('render');
});
```

The hook runs on every update (i.e. mount and re-render(s)) of parent functional component.

2. If the second parameter is an empty array i.e.

```js
useEffect(() => {
  console.log('render');
}, []);
```

The hook on runs on the first mount solely.

3. If the second parameter is an array that contains one or two values, the hook is called when any of these values changes.

```js
useEffect(() => {
  console.log('render');
}, [name, email]);
```

In this case, the arguments name and email are passed to the useEffect hook, therefore it watches to see if there are changes to the values - this is what is referred to as a subscription in the React docs.

You can now see that the presence of the second parameter determines whether the function declared is in the useEffect runs or not. Therefore the useEffect depends on it and because it takes an array of arguments it is referred to as an array of dependencies.

Therefore the useEffect hook can be visualized as a function written this way.

```js
const previousValues = [];
let renderedOnMount = false;

function useEffect = (func, dependency) => {

  if (dependency === undefined) {
    func();
    return;
  }

  else if (dependency.length === 0 && !renderedOnMount) {
    let renderedOnMount = true;
    func();
    return;
  }

  else {
    for (let index = 0; index < dependency.length; index++) {
      if (previousValues[index] !== dependency[index]) {
        previousValues = dependency;
        func();
        break;
      }
    }
  }
}
```

# and then came side effects

Side effects can be referred to anything your function does that modifies the state of your application.

When you are listening to a change in the state of a particular variable, we refer to that as a subscription and clearing that function is referred to as unsubscribing.

```js
import React, { useState, useEffect } from 'react';
export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <div>{windowWidth}</div>;
}
```

The code above listens for a change in the size of the window width and updates the value of windowWidth.

Because we only need to add the eventListener once, and that is on render, we pass an empty array of dependencies and the useEffect adds the eventListener and the width of the window is updated accordingly. We only need to unsubscribe from this when we unmount the component.

If you want to get the best use of the useEffect hook, you need to know what variables are changing and tailor the hook towards that end.

## Note

A component re-render is different from when the component mount because on mount the component is just getting introduced to the VDOM and it renders for the first time, rendering means to update the DOM with a new set of instructions for creating the DOM.

In functional components, every state change triggers a re-rendering. Understanding this will help you to understand how the hooks affect each other.
