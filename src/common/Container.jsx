import * as React from 'react';

import styles from './style.module.css';

export default function Container({ children, as = 'div', }) {
  const Component = as;

  return (
    <Component className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </Component>
  );
}
