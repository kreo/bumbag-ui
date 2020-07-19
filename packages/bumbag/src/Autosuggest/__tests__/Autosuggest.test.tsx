import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Autosuggest } from '../Autosuggest';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Autosuggest
        dropdownMenuInitialState={{ baseId: 'test' }}
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={{ label: '' }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Autosuggest
        dropdownMenuInitialState={{ baseId: 'test' }}
        color="primary"
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={{ label: '' }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('css.root should render correctly', () => {
    const { container } = render(
      <Autosuggest
        dropdownMenuInitialState={{ baseId: 'test' }}
        variant="test"
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={{ label: '' }}
      />,
      {
        theme: { Autosuggest: { variants: { test: { css: { root: { backgroundColor: 'red' } } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('css.root should render correctly', () => {
    const { container } = render(
      <Autosuggest
        dropdownMenuInitialState={{ baseId: 'test' }}
        overrides={{ Autosuggest: { css: { root: { backgroundColor: 'red' } } } }}
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={{ label: '' }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('css.root should render correctly', () => {
    const { container } = render(
      <Autosuggest
        dropdownMenuInitialState={{ baseId: 'test' }}
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={{ label: '' }}
      />,
      {
        theme: { Autosuggest: { css: { root: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Autosuggest
        dropdownMenuInitialState={{ baseId: 'test' }}
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={{ label: '' }}
      />,
      {
        theme: { Autosuggest: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});