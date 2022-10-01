import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'
import { getUserEmail } from '../../utils/getUserEmail'

export const deleteTicket = async (event, context, callback) => {
  let userEmail = null
  try {
    userEmail = getUserEmail(event)
  } catch (error) {
    return errorResponse('Unauthorized: email not present in JWT', 401)
  }

  const id = event.pathParameters.id
  const orm = await loadORM()
  const ticket = await orm.Ticket.findByPk(id)

  if (!ticket) {
    return errorResponse('Ticket could not be found', 404)
  }
  if (ticket.userEmail !== userEmail) {
    return errorResponse('Forbidden', 403)
  }
  try {
    await ticket.destroy()
    return succesfullResponse({ message: 'Ticket deleted successfully' })
  } catch (error) {
    return errorResponse('Ticket could not be deleted', 400)
  }
}
