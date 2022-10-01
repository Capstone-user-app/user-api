function sanitizeBody (body) {
  delete body.id
  delete body.userEmail
  return body
}

export { sanitizeBody }
