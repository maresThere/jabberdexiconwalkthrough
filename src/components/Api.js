
const TOKEN = 'vorpal'
const API_BASE = 'https://jabberdexicon.herokuapp.com'

const get = (path) => {
  const url = API_BASE + path + '?access_token=' + TOKEN
  return window.fetch(url).then((response) => {
    return response.json()
  })
}
export { get }
