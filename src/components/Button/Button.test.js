import { render, getByText } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  test('should display text', () => {
    const { container } = render(<Button text="click me" />);

    getByText(container, 'click me');
  });
});
