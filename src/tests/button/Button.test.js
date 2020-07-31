import React from 'react'
import Button from '../../components/button/Button'
import { render } from '@testing-library/react'

test('render button component', () => {
  const div = document.createElement('div')
  render(<Button />, div)
})
