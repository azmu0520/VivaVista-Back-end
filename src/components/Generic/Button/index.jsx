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
  margin,
  padding,
  border,
  onClick,
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
      margin={margin}
      padding={padding}
      border={border}
      onClick={onClick}
    >
      {children}
    </Wrap>
  );
};

export default Button;
