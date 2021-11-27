import { useEffect, useState } from 'react';
import './styles/App.css';
import Tickets from './components/Tickets.js';
import TicketDetails from './components/TicketDetails';
import loader from './assets/loader.svg';
import { getTickets } from './common/api';
import { paginateTickets } from './common/helper';

function App() {

  // state variable getters and setters
  const [tickets, setTickets] = useState(null)
  const [paginatedTickets, setPaginatedTickets] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [countPerPage] = useState(25);
  const [selectedTicket, setSelectedTicket] = useState(undefined);
  const [numberOfPages, setNumberOfPages] = useState([1]);

  // get tickets, set tickets once if success, otherwise set error
  useEffect(() => {
    getTickets()
      .then(res => {
        if (typeof res === "string") {
          setError(res);
        } else {
          setTickets(res)
        }
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])

  // once ticket are fetched, group tickets in arrays depending on count per page
  useEffect(() => {
    tickets && setPaginatedTickets(paginateTickets(tickets, countPerPage))
  }, [tickets, countPerPage])

  // calculate number of pages for pagination once tickets have been grouped
  useEffect(() => {
    paginatedTickets && setNumberOfPages(paginatedTickets.map((page, index) => index))
  }, [paginatedTickets])

  function onPageChange(number) {
    setCurrentPage(number)
  }

  // set selected ticket, this selectedTicket will be passed on to the modal to view ticket details
  function onSelectTicket(id) {
    setSelectedTicket(tickets.filter(ticket => ticket.id === id))
  }

  // clear ticket if view ticket details modal was closed
  function onSelectedTicketClear(id) {
    setSelectedTicket(undefined)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="header-title">Zendesk Tickets UI</h3>
      </header>
      {error ? (
        <p className="error">
          {error}
        </p>
      ) : (
        <div>
          {tickets ? (
            <Tickets
              tickets={paginatedTickets ? paginatedTickets[currentPage] : null}
              count={tickets && tickets.length}
              countPerPage={paginatedTickets ? paginatedTickets[currentPage].length : null}
              onSelectTicket={onSelectTicket}
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              onPageChange={onPageChange}
            />
          ) : (
            <img className="loader" src={loader} alt="Loading..."/>
          )}
          <TicketDetails selectedTicket={selectedTicket} onSelectedTicketClear={onSelectedTicketClear} />
        </div>
      )
      }
    </div>
  );
}

export default App;
