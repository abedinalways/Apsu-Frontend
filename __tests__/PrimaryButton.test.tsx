import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PrimaryButton from '@/components/reusable/button/PrimaryButton';

describe('PrimaryButton', () => {
  it('renders button text', () => {
    render(<PrimaryButton text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    let clicked = false;
    render(<PrimaryButton text="Click me" onClick={() => { clicked = true; }} />);
    screen.getByText('Click me').click();
    expect(clicked).toBe(true);
  });
});
