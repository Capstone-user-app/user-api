import { succesfullResponse, errorResponse } from '../../utils/response_util'

export const updateTicket = async (event) => {
  try {
    // here we must update the ticket on the DB
    const requestBody = JSON.parse(event.body)
    if (requestBody?.error) throw new Error('Error creating ticket')
    return succesfullResponse('Ticket created with those data ' + requestBody.data)
  } catch (error) {
    return errorResponse(error.message)
  }
}
