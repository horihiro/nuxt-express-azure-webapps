/* eslint-disable no-console */

process.env.UNIX_SOCKET = process.env.PORT
process.argv[2] = 'start' // set argument to 'start'
require('nuxt/bin/nuxt') // execute command 'nuxt
