import { FC } from "react";
import * as Styled from "./Button.styled";

interface ButtonInterface {
  active?: boolean;
  disabled?: boolean;
  onClick: any;
  size?: string;
  variant: string;
  outline?: boolean;
  children: any;
}

const Button: FC<ButtonInterface> = ({
  active = false,
  disabled = false,
  onClick,
  size = "medium",
  variant,
  outline = false,
  children,
}) => {
  return (
    <Styled.Button
      active={active}
      disabled={disabled}
      variant={variant}
      outline={outline}
      onClick={onClick}
      size={size}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
