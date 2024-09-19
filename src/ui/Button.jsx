import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-text);
    background-color: var(--color-primary);

    &:hover {
      opacity: 0.8;
    }
  `,
  secondary: css`
    color: var(--color-text);
    background: var(--color-bg);
    border: 1px solid var(--color-secondary);

    &:hover {
      opacity: 0.8;
    }
  `,
  accent: css`
    color: var(--color-text);
    background-color: var(--color-accent);

    &:hover {
      opacity: 0.8;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  border-radius: 2rem;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
