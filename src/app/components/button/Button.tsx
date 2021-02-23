import React from 'react';

import ButtonStyled from './Button.styled';
import Icon from '../icon/Icon';

export interface Props {
  className?: string;
  btnTheme?: string;
  type?: "submit" | 'reset' | "button";
  isHollow?: boolean;
  isDisabled?: boolean;
  icon?: any;
  label: string;
  onClick?: (ev: any) => void;
}

const Button = ({
  className,
  type = "button",
  btnTheme = 'primary',
  isHollow = false,
  isDisabled = false,
  icon,
  label,
  onClick,
}: Props) => {
  const _handleClick = (e: any) => {
    e.preventDefault();
    if (!isDisabled && onClick) {
      onClick(e);
    } else {
      return;
    }
  };

  return (
    <ButtonStyled
      className={className}
      type={type}
      btnTheme={btnTheme}
      isHollow={isHollow}
      isDisabled={isDisabled}
      hasIcon={icon ? true : false}
      onClick={e => _handleClick(e)}
    >
      {label}
      {icon && <Icon type={icon} className="btn__icon" />}
    </ButtonStyled>
  );
};

export default Button;
