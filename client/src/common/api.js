import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5555'
})

export function getTickets() {
  return api.get('/')
    .then((res) => {
      return res.data.requests
    })
    .catch((error) => {
      return error.message
    })
};