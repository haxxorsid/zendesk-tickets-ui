const axios = require('axios');
const cors = require('cors')
const express = require('express');
const server = express();

const port = 5555
const subdomain = 'subdomain'
const email = 'your_email_here'
const token= 'api_token_here'

// Middleware 
server.use(cors())

// GET tickets request
server.get('/', function(req, res) {
  axios.get(`https://${subdomain}.zendesk.com/api/v2/requests.json`, {
    headers: { Authorization: 'Basic '+Buffer.from(`${email}/token:${token}`).toString('base64') },
    responseType: 'json',
    responseEncoding: 'utf8'
  }).then(function(response) {
      console.log(`${response.data.requests.length} tickets received.`)
      res.send(response.data)
    })
    .catch(function(error) {
      console.log(`{err_status: ${error.response.status}, err_text: ${error.response.statusText}, err: ${error.response.data.error}}`)
      res.status(error.response.status).send(JSON.stringify(error.response.status))
    })
});

// Error Handler
server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

// Start the server
server.listen(port, (error) => {
  if (error) {
    console.error('Unable to start the end. Error: ', error);
  } else {
    console.log(`Server started at http://localhost:${port}`);
  }
})