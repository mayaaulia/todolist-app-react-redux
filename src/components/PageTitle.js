import React from 'react';
// getting style from title.module.scss
import style from '../styles/modules/title.module.scss';

function PageTitle({ children, ...rest }) {
  // {...rest} is used for if we past any other props
  return (
    <div>
      <p className={style.title} {...rest}>
        {children}
      </p>
    </div>
  );
}

export default PageTitle;
