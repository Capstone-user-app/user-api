import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'

export const createTicket = async (event) => {
  // TO DO: Parse user email from token and attach to body
  const body = JSON.parse(event.body)
  const orm = await loadORM()

  try {
    const ticket = await orm.Ticket.create(body, 201)
    return succesfullResponse(ticket)
  } catch (error) {
    return errorResponse('Ticket could not be created', 400)
  }
}
