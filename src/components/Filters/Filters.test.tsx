import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Filters } from './Filters';

describe('Filters', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filters applyFilters={jest.fn()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('clicking search calls apply function from props and prevents default click side effect', () => {
    const applyFilters = jest.fn();
    const event = {
      preventDefault: jest.fn()
    }

    const wrapper = mount(<Filters applyFilters={applyFilters}/>);
    wrapper.find('a.search-button').simulate('click', event);

    expect(applyFilters).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  })

  it('clicking reset filters calls apply with empty filters and prevents default click side effect', () => {
    const applyFilters = jest.fn();
    const event = {
      preventDefault: jest.fn()
    }

    const wrapper = mount(<Filters applyFilters={applyFilters} isResetVisible={true}/>);
    wrapper.find('a.reset-filters').simulate('click', event);

    expect(applyFilters).toHaveBeenCalledWith({});
    expect(event.preventDefault).toHaveBeenCalled();
  })
})
