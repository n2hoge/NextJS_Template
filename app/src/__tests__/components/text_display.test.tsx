import { render } from '@testing-library/react';
import React from 'react';
import TextDisplay from '@/components/text_display';
import '@testing-library/jest-dom';

describe('TextDisplay', () => {
  test('should display the given text', () => {
    const text = 'Hello, world!';
    const { getByText } = render(<TextDisplay text={text} />);
    const displayedText = getByText(text);
    expect(displayedText).toBeInTheDocument();
  });
});
