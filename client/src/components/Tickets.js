import React from 'react';
import Ticket from './Ticket';
import Paginator from './Paginator.js';

function Tickets(props) {
    return (
        <div className="tickets">
            <h3>{props.count} total tickets, {props.countPerPage} on this page</h3>
            {props.tickets &&
                props.tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} onSelectTicket={props.onSelectTicket} />)
            }
            <Paginator
                onPageChange={props.onPageChange}
                numberOfPages={props.numberOfPages}
                currentPage={props.currentPage}
            />
        </div>

    );
}

export default Tickets;