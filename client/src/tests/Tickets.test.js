import React from 'react';
import renderer from 'react-test-renderer'
import Tickets from '../components/Tickets';
import ticketsData from './mockData/tickets'

test('Should render tickets correctly with props', () => {
    const component = renderer
        .create(<Tickets tickets={ticketsData} count={ticketsData.length} countPerPage={2} />);
    expect(component.toJSON()).toMatchSnapshot()
  })
  
  test('Should render ticket title correctly', () => {
    const component = renderer.create(<Tickets />);
    expect(component.root.findAllByType('h3').length).toBe(1)
  })
  
  test('Should render paginator correctly', () => {
    const component = renderer.create(<Tickets />);
    expect(component.root.findAllByProps({className: 'paginator'}).length).toBe(1)
  })