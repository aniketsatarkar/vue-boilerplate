/**
 * Utility for using Axios to make request and intercept the response
 * and request to pre-process request or response respectively.
*/

import axios from 'axios'

const service = axios.create({
  baseURL: '', // API base url here.
  timeout: 30000 // request timeout 30 seconds
})

/**
 * Intercept request
*/
service.interceptors.request.use(
  config => {
    // set required headers for request here
    // config.headers['Content-Type'] = null

    return config
  },
  error => {
    Promise.reject(error)
  }
)

/**
 * Intercept response
*/
service.interceptors.response.use(
  response => {
    // handle response data pre-processinge here

    return response
  },
  error => {
    // handle api request errors here

    return Promise.reject(error)
  }
)

export default service
