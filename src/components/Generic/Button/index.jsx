import React from 'react';
import { Wrap } from './style';
const Button = ({
  children,
  color,
  width,
  height,
  bg,
  radius,
  size,
  className,
}) => {
  return (
    <Wrap
      color={color}
      width={width}
      size={size}
      height={height}
      bg={bg}
      radius={radius}
      className={className}
    >
      {children}
    </Wrap>
  );
};

export default Button;
