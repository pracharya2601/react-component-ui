import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  background: #7a7aff;
  color: white;
  margin: 1em;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 1px solid #7a7aff;

  &:hover {
    background: #a2a2fc;
    color: #383838;
    border: 1px solid #7a7aff;
  }
`

const Button = ({ icon, title, onClick }) => (
  <StyledButton onClick={onClick}>{title}</StyledButton>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default Button
