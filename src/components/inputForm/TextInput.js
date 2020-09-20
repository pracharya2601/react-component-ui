import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

const TextInput = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false
  })
  const changeHandeler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value
    })
  }

  const element = props.multiline ? (
    <textarea
      id={props.id}
      type={props.text}
      rows={props.row || 3}
      placeholder={props.placeholder}
      onChange={changeHandeler}
      value={inputState.value}
    />
  ) : (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeHandeler}
      value={inputState.value}
    />
  )
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  )
}

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: true
      }
    default:
      return state
  }
}

TextInput.PropTypes = {
  value: PropTypes.string
}

export default TextInput
