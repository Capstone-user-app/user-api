function sanitizeBody (body) {
  delete body.id
  delete body.userEmail
  delete body.updatedAt
  delete body.createdAt
  return body
}

export { sanitizeBody }
