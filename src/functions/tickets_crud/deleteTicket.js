import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'

export const deleteTicket = async (event, context, callback) => {
  const id = event.pathParameters.id
  const orm = await loadORM()
  const ticket = await orm.Ticket.findByPk(id)

  if (!ticket) {
    return errorResponse('Ticket could not be found', 404);
  }
  try {
    await ticket.destroy()
    return succesfullResponse({ message: 'Ticket deleted successfully' })
  } catch (error) {
    return errorResponse('Ticket could not be deleted', 400)
  }
}
