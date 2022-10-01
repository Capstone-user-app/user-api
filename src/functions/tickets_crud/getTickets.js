import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'
import { getUserEmail } from '../../utils/getUserEmail'

export const getTickets = async (event, context, callback) => {
  let userEmail = null;
  try {
    userEmail = getUserEmail(event);
  } catch (error) {
    return errorResponse('Unauthorized: email not present in JWT', 401)
  }

  const orm = await loadORM()
  const tickets = await orm.Ticket.findAll({
    where: { userEmail },
    include: { model: orm.Comment }
  })
  return succesfullResponse(tickets)
}
