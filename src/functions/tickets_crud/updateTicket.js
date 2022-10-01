import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'
import { sanitizeBody } from '../../utils/sanitizeBody'

export const updateTicket = async (event) => {
  const id = event.pathParameters.id
  const body = sanitizeBody(JSON.parse(event.body))

  const orm = await loadORM()
  let ticket = await orm.Ticket.findByPk(id, { include: { model: orm.Comment } })

  if (!ticket) {
    return errorResponse('Ticket not found', 404)
  }

  try {
    ticket = await ticket.update(body)
    return succesfullResponse(ticket)
  } catch (error) {
    return errorResponse('Ticket could not be updated', 400)
  }
}
