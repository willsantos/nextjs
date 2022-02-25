import React from 'react';

const LinkStyled = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
      {children}
    </a>
  );
});

export default LinkStyled;