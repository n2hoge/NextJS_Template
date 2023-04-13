import React from 'react';
import { render } from '@testing-library/react';
import TextDisplay from '@/components/sample';
import '@testing-library/jest-dom';

describe('TextDisplay', () => {
  test('should display the given text', () => {
    const text = 'Hello, world!';
    const { getByText } = render(<TextDisplay text={text} />);
    const displayedText = getByText(text);
    expect(displayedText).toBeInTheDocument();
  });
});
