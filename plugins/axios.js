import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.WEBSITE_SITE_NAME ? `${process.env.WEBSITE_SITE_NAME}.azurewebsites.net` : `localhost:${process.env.PORT || 3000}`}`
}

export default axios.create(options)
