import React from 'react';
import ReactDOM from 'react-dom';
import { FindAShow } from './FindAShow';

describe('FindAShow', () => {
  /** All components should at least have this test, but time constraints */
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FindAShow />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});