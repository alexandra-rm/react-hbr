import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { queryAllByText } = render(<App />);
  const linkElement = queryAllByText(/Placeholder text here/i);

  expect(linkElement.length).toBe(4);
});
