import React from 'react';
import renderer from 'react-test-renderer'
import TicketDetails from '../components/TicketDetails';
import ticketData from './mockData/ticket';
import ReactDOM from 'react-dom';

test('Should render ticket details correctly with props', () => {
    const onSelectedTicketClearFn = jest.fn();
    ReactDOM.createPortal = node => node;
    const component = renderer
        .create(<TicketDetails selectedTicket={[ticketData]} onClearSelectedTicket={onSelectedTicketClearFn} />);
    expect(component.toJSON()).toMatchSnapshot()
})