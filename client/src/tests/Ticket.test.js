import React from 'react';
import renderer from 'react-test-renderer'
import Ticket from '../components/Ticket';
import ticketData from './mockData/ticket'

test('Should render ticket row correctly with props', () => {
    const component = renderer
        .create(<Ticket key={ticketData.id} ticket={ticketData} />);
    expect(component.toJSON()).toMatchSnapshot()
  })