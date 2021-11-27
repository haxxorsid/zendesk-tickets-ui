import React from 'react';
import { formattedDate } from '../common/helper';

function Ticket(props) {
    return (
        <div className="ticket" onClick={() => props.onSelectTicket(props.ticket.id)}>
            <div className="ticket-header">
                <p>
                    <span className="id"> ID: {props.ticket.id} </span>
                    <span className="status">Status: {props.ticket.status}</span>
                    <span className="right date">{formattedDate(props.ticket.created_at)}</span>
                </p>
                <p>
                    <b>Subject: </b> <span className="subject">{props.ticket.subject}</span>
                </p>
            </div>
        </div>
    );
}

export default Ticket;