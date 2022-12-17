import React from 'react';
import { Wrap } from './style';
const Button = ({ children, color, width, height, bg, radius, size }) => {
  return (
    <Wrap
      color={color}
      width={width}
      size={size}
      height={height}
      bg={bg}
      radius={radius}
    >
      {children}
    </Wrap>
  );
};

export default Button;
