// take all tickets and group them into array based on page size
export const paginateTickets = (tickets, pageSize) => {
    let paginatedTickets = []
    let currentPageTickets = []

    tickets.map((ticket, index) => {
        // if ticket is 25th, then
        if (index !== 0 && index % pageSize === 0) {
            // push the tickets of current page in the paginatedTickets array
            paginatedTickets.push(currentPageTickets)
            currentPageTickets = []
        }
        // push current ticket to current page tickets
        return currentPageTickets.push(ticket)
    })
    // remaining tickets push in paginatedTickets array
    paginatedTickets.push(currentPageTickets)

    return paginatedTickets
};

// take date and return it as a string
export const formattedDate = (date) => {
    const dateObject = new Date(date)
    return dateObject.toDateString()
};