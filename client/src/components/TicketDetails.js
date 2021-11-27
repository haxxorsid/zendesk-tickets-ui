import React from 'react';
import Modal from 'react-modal';
import { formattedDate } from '../common/helper';

function TicketDetails (props) {
    return (
        <Modal
          isOpen={!!props.selectedTicket}
          contentLabel="Details"
          onRequestClose={props.onClearSelectedTicket}
          className="modal"
          ariaHideApp={false}
        >
          {props.selectedTicket && 
            <div>
              <h4>{props.selectedTicket[0].subject}</h4>
              <div className="ticket-header">
                <p>
                  <span className="status"> Status: {props.selectedTicket[0].status}</span>
                  <span className="right date ">{formattedDate(props.selectedTicket[0].created_at)}</span> 
                </p>
              </div>
              <p className="ticket-details-description">{props.selectedTicket[0].description}</p> 
            </div>
          }
          <button className="button" onClick={props.onSelectedTicketClear}>Back</button>
        </Modal>
    );
}

export default TicketDetails;