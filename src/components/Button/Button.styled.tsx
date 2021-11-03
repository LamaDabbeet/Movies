import styled from "styled-components";
import { button } from "../../theme/button";
import { typography } from "../../theme/typography";

function getHoverStyle(props: { variant: string; outline: boolean }) {
  const { variant, outline } = props;
  if (outline) {
    return button.outline[variant].hover;
  }
  return button.variant[variant].hover;
}

function getThemeButtonStyle(props: {
  variant: string;
  outline: boolean;
  active: boolean;
  size: string;
}) {
  const { variant, outline, active, size } = props;
  const buttonVariantStyles = outline
    ? button.outline[variant]
    : button.variant[variant];
  const buttonStyles = button;
  let styles = {
    ...buttonStyles,
    ...buttonVariantStyles,
  };
  if (outline) {
    const buttonOutlineStyles = button.outline;
    styles = {
      ...styles,
      ...buttonOutlineStyles,
      backgroundColor: "white",
    };
  }
  if (size) {
    const buttonSize = button.size[size];
    styles = {
      ...styles,
      ...buttonSize,
    };
  }
  if (active) {
    const hoverStyle = getHoverStyle(props);
    styles = {
      ...styles,
      ...hoverStyle,
    };
  }

  return styles;
}

export const Button = styled.button`
  display: inline-flex;
  outline: none;
  text-decoration: none;
  border-radius:3px;
  transition: all 0.2s linear;
  border: none;
  margin-left: 1rem;
  font-weight: ${typography.medium}
  ${getThemeButtonStyle}
  :hover{
    cursor:pointer;
    ${getHoverStyle}
  }
  > span {
    display: inline-flex;
  }
`;
