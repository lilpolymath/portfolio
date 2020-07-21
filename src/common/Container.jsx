import * as React from 'react';

import styles from './style.module.css';

export default function Container({ children, as = 'div', ...props }) {
  const Component = as;

  const style = styles.container + ' ' + props.styles;

  return (
    <Component className={style} {...props}>
      <div className={styles.wrapper}>{children}</div>
    </Component>
  );
}
