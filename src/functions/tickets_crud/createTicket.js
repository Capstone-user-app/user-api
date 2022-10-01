import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'
import { getUserEmail } from '../../utils/getUserEmail'
import { sanitizeBody } from '../../utils/sanitizeBody'

export const createTicket = async (event) => {
  let userEmail = null
  try {
    userEmail = getUserEmail(event)
  } catch (error) {
    return errorResponse('Unauthorized: email not present in JWT', 401)
  }

  const body = sanitizeBody(JSON.parse(event.body))
  const orm = await loadORM()

  try {
    const ticket = await orm.Ticket.create({ ...body, userEmail }, 201)
    return succesfullResponse(ticket)
  } catch (error) {
    return errorResponse('Ticket could not be created', 400)
  }
}
