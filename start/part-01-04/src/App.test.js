import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders paragraph with custom text', () => {
  const { getByText } = render(<App />);
  const paragraphWithTextElement = getByText(/This is the second paragraph/i);

  expect(paragraphWithTextElement).toBeInTheDocument();
});
