import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../index';

describe('Button component', () => {
  it('renders with label', () => {
    const { getByText } = render(<Button label="Click me" />);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('renders primary button', () => {
    const { getByText } = render(<Button label="Primary Button" primary />);
    const button = getByText('Primary Button');
    expect(button).toHaveClass('storybook-button--primary');
  });

  it('renders secondary button', () => {
    const { getByText } = render(<Button label="Secondary Button" />);
    const button = getByText('Secondary Button');
    expect(button).toHaveClass('storybook-button--secondary');
  });

  it('renders button with specified background color', () => {
    const { getByText } = render(
      <Button label="Custom Color Button" backgroundColor="#ff0000" />
    );
    const button = getByText('Custom Color Button');
    expect(button).toHaveStyle('background-color: #ff0000');
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Clickable Button" onClick={onClickMock} />);
    const button = getByText('Clickable Button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('has correct size class', () => {
    const { getByText, rerender } = render(<Button label="Small Button" size="small" />);
    const button = getByText('Small Button');
    expect(button).toHaveClass('storybook-button--small');

    rerender(<Button label="Medium Button" size="medium" />);
    const mediumButton = getByText('Medium Button');
    expect(mediumButton).toHaveClass('storybook-button--medium');

    rerender(<Button label="Large Button" size="large" />);
    const largeButton = getByText('Large Button');
    expect(largeButton).toHaveClass('storybook-button--large');
  });
});
