import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'

export const readTicket = async (event, context, callback) => {
  const id = event.pathParameters.id
  const orm = await loadORM()
  const ticket = await orm.Ticket.findByPk(id, { include: { model: orm.Comment } })
  if (ticket) {
    return succesfullResponse(ticket)
  }
  errorResponse('Ticket not found', 404)
}
