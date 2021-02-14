import * as React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import App from '../../App';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('App renders correctly', () => {
  it('App', async () => {
    const component = render(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
