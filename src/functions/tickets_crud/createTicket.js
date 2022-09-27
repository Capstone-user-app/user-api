import { succesfullResponse, errorResponse } from '../../utils/response_util'

export const createTicket = async (event) => {
  try {
    // here we must create the ticket on the DB
    const requestBody = JSON.parse(event.body)
    if (requestBody?.error) throw new Error('Error creating ticket')
    return succesfullResponse(requestBody.message)
  } catch (error) {
    return errorResponse(error.message)
  }
}
