import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'
import { getUserEmail } from '../../utils/getUserEmail'

export const readTicket = async (event, context, callback) => {
  let userEmail = null;
  try {
    userEmail = getUserEmail(event);
  } catch (error) {
    return errorResponse('Unauthorized: email not present in JWT', 401)
  }

  const id = event.pathParameters.id
  console.log(id)
  const orm = await loadORM()
  const ticket = await orm.Ticket.findByPk(id, { include: { model: orm.Comment } })

  if (!ticket) {
    return errorResponse('Ticket not found', 404)
  }
  if (ticket.userEmail != userEmail) {
    return errorResponse('Forbidden', 403)
  }

  return succesfullResponse(ticket)
}
