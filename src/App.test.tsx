import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  test('should render', () => {
    const { getByText } = render(<App />);

    expect(getByText('Welcome to Image Tool!')).toBeInTheDocument();
  });
});
