import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Button.Style'

const Button = ({ icon, title, onClick, type, buttonSize, color, outline }) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      outline={outline}
      buttonSize={buttonSize}
    >
      hello
    </StyledButton>
  )
}
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default Button
