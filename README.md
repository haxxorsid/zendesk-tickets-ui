# Zendesk Tickets UI
Zendesk is a customer service tool that allows the creation and management of support tickets. A Ticket Viewer  should fetch the tickets, view tickets and their details, paginate them if more than 25. 

![tickets list](https://github.com/haxxorsid/zendesk-tickets-ui/blob/main/screenshots/01.png)

![ticket details](https://github.com/haxxorsid/zendesk-tickets-ui/blob/main/screenshots/02.png)

![error message](https://github.com/haxxorsid/zendesk-tickets-ui/blob/main/screenshots/03.png)

## Installation

### Dependencies
- Node (axios, express)
- React (axios, react-modal, react-test-renderer)

### Steps
1. Clone the repo
2. In the project folder, cd into server folder by `cd server` and run `npm install`
3. In the project folder, cd into client folder by `cd client` and run `npm install`
4. In the server folder, run `npm start`, this will start the node server at port 5555. If you wish to change the subdomain, email, api token, or port, edit `subdomain`, `email`, `token`, `port` variables in `server.js`.
5. In the client folder, run `npm start`, this should start the UI at port 3000. URL for server is defined in `src/common/api.js` file.
6. In order to run tests, in the client folder run `npm test`.

## Use
React UI is fetching tickets from node server and node server is fetching tickets from zendesk api by using the `requests.json` api and authentication is being done by API token. 
Once you open the UI at port 3000, it lists down the tickets (id, status, subject, created date) with pagination. Currently, tickets per page are 25. Once you click on any ticket, it will open the ticket details (subject, status, created date, description) in a modal. If you switch the page, it will load the next 25 tickets.

## Criteria
- :white_check_mark: Meets requirements:
    - :heavy_check_mark: No extra features are added.
- :white_check_mark: All required features have been attempted.
    - :heavy_check_mark: Displays some knowledge of application design:
    - :heavy_check_mark: Separation of concerns.
    - :heavy_check_mark: Simplicity.
- :white_check_mark: Handles basic errors:
    - :heavy_check_mark: Displays a friendly error message if the API is unavailable or the response is invalid.
    - :heavy_check_mark: Tells the user something is wrong if there is a program error.
- :white_check_mark: Includes tests.
    - :heavy_check_mark: Testability: code is implemented in a testable way
    - :heavy_check_mark: Unit tests: individual units of work are tested in isolation. You must use a standard unit test framework for your language of choice.
    - :heavy_check_mark: Coverage: your unit tests cover the code you created
- :white_check_mark: UI is easy to use and displays ticket results clearly.
    - :heavy_check_mark: Presents a good understanding of the integration with the Zendesk API and how
    to surface that data to the end-user 
- :white_check_mark: Code demonstrates:
    - :heavy_check_mark: Consistency.
    - :heavy_check_mark: Adherence to common standards.