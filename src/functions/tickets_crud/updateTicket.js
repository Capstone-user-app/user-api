import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'
import { sanitizeBody } from '../../utils/sanitizeBody'
import { getUserEmail } from '../../utils/getUserEmail'

export const updateTicket = async (event) => {
  let userEmail = null
  try {
    userEmail = getUserEmail(event)
  } catch (error) {
    return errorResponse('Unauthorized: email not present in JWT', 401)
  }

  const id = event.pathParameters.id
  const body = sanitizeBody(JSON.parse(event.body))

  const orm = await loadORM()
  let ticket = await orm.Ticket.findByPk(id, { include: { model: orm.Comment } })

  if (!ticket) {
    return errorResponse('Ticket not found', 404)
  }
  if (ticket.userEmail !== userEmail) {
    return errorResponse('Forbidden', 403)
  }

  try {
    ticket = await ticket.update(body)
    return succesfullResponse(ticket)
  } catch (error) {
    return errorResponse('Ticket could not be updated', 400)
  }
}
