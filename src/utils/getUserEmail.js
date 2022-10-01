import jwtDecode from 'jwt-decode'

function getUserEmail (event) {
  const email = jwtDecode(event.headers.Authorization).email
  if (!email) {
    throw Error('Invalid Token, email claim is not present')
  }
  return email
}

export { getUserEmail }
