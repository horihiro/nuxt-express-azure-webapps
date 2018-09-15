import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  if (isNaN(parseInt(process.env.PORT))) {
    options.socketPath = process.env.PORT
  } else {
    options.baseURL = `localhost:${process.env.PORT || 3000}`
  }
}

export default axios.create(options)
