import 'isomorphic-fetch'

const jsonToQueryString = json => {
  let params = []
  for (var k in json) params.push(`${k}=${encodeURIComponent(json[k])}`)
  return params.join('&')
}

const handleResponseError = response => {
  if (response.status >= 400) throw new Error('Bad response from server')
  return response.json()
}

const buildJSONHeaders = headers => {
  return Object.assign({}, headers, { 'Content-Type': 'application/json' })
}

const postJSON = (uri: RequestInfo, body: object = {}, { headers = {} } = {}) =>
  fetch(uri, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: buildJSONHeaders(headers)
  }).then(handleResponseError)

const getJSON = (uri: RequestInfo, body?: object, { mode = 'cors' as RequestMode, headers = {} } = {}) => {
  const queryString = body ? `?${jsonToQueryString(body)}` : ''
  return fetch(`${uri}${queryString}`, {
    headers: buildJSONHeaders(headers),
    mode
  }).then(handleResponseError)
}

export { postJSON, getJSON }
