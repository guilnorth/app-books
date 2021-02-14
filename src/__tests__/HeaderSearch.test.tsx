import * as React from 'react';
import { cleanup, fireEvent, act, render } from '@testing-library/react-native';
import { renderWithContext } from '../utils/utilContextRender';
import HeaderSearch from '../components/HeaderSearch';
import App from '../../App';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const mockHooks = jest.spyOn(React, 'useContext');
mockHooks.mockImplementationOnce(() => ({
  term: '',
  setTerm: () => {},
  searchBooks: () => {},
}));

test('Button Submit to be defined', () => {
  const { getByTestId } = renderWithContext(<HeaderSearch />);
  const btnSubmit = getByTestId('submitSearch');
  expect(btnSubmit).toBeDefined();
});

test('Search input to be defined', () => {
  const { getByTestId } = renderWithContext(<HeaderSearch />);
  const inputSearch = getByTestId('inputSearch');
  expect(inputSearch).toBeDefined();
});

test('Call to be 1', () => {
  const { getByTestId } = renderWithContext(<HeaderSearch />);
  const inputSearch = getByTestId('inputSearch');
  const btnSubmit = getByTestId('submitSearch');
  act(() => {
    fireEvent.changeText(inputSearch, 'Harry');
    fireEvent.press(btnSubmit);
    expect(mockHooks.mock.calls.length).toBe(1);
  });
});

describe('HeaderSearch renders correctly', () => {
  it('App', async () => {
    const component = render(<HeaderSearch />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
