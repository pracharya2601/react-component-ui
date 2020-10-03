import styled, { css } from 'styled-components'
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor
  //   grayColor
} from '../Assets/color'

export const StyledButton = styled.button`
  color: palevioletred;
  font-size: 0.9rem;
  margin: 1em;
  border-radius: 3px;
  text-transform: uppercase;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  pointer-events: auto;
  padding: 0.35rem 1.25rem;
    ${(props) =>
      props.color === 'primary' &&
      css`
        background-color: ${primaryColor.main};
        border: 1px solid ${primaryColor.main};
        color: white;
        &:hover {
          background-color: ${primaryColor.light};
        }
      `}
    ${(props) =>
      props.color === 'primary' &&
      props.outline &&
      css`
        background-color: white;
        color: ${primaryColor.dark};
        &:hover {
          background-color: ${primaryColor.light};
        }
      `}
    ${(props) =>
      props.color === 'warning' &&
      css`
        background-color: ${warningColor.main};
        border: 1px solid ${warningColor.main};
        color: white;
        &:hover {
          background-color: ${warningColor.light};
        }
      `}
    ${(props) =>
      props.color === 'warning' &&
      props.outline &&
      css`
        background-color: white;
        color: ${warningColor.dark};
        &:hover {
          background-color: ${warningColor.light};
        }
      `}
    ${(props) =>
      props.color === 'danger' &&
      css`
        background-color: ${dangerColor.main};
        border: 1px solid ${dangerColor.main};
        color: white;
        &:hover {
          background-color: ${dangerColor.light};
        }
      `}
    ${(props) =>
      props.color === 'danger' &&
      props.outline &&
      css`
        background-color: white;
        color: ${dangerColor.dark};
        &:hover {
          background-color: ${dangerColor.light};
        }
      `}
    ${(props) =>
      props.color === 'success' &&
      css`
        background-color: ${successColor.main};
        border: 1px solid ${successColor.main};
        color: white;
        &:hover {
          background-color: ${successColor.light};
        }
      `}
    ${(props) =>
      props.color === 'success' &&
      props.outline &&
      css`
        background-color: white;
        color: ${successColor.dark};
        &:hover {
          background-color: ${successColor.light};
        }
      `}
    ${(props) =>
      props.color === 'info' &&
      css`
        background-color: ${infoColor.main};
        border: 1px solid ${infoColor.main};
        color: white;
        &:hover {
          background-color: ${infoColor.light};
        }
      `}
    ${(props) =>
      props.color === 'info' &&
      props.outline &&
      css`
        background-color: white;
        color: ${infoColor.dark};
        &:hover {
          box-shadow: 0.5px 0.5px 2px 2px ${infoColor.light} inset;
        }
      `}
    ${(props) =>
      props.buttonSize === 'small' &&
      css`
        font-size: 0.8rem;
        padding: 0.25rem 0.75rem;
      `}
    ${(props) =>
      props.buttonSize === 'large' &&
      css`
        font-size: 1.1rem;
        padding: 0.55rem 1.5rem;
      `}
`
