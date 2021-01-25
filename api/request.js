import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:7123',
  headers: { Accept: "application/json"},

})

export default request