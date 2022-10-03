import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { getUserEmail } from '../../utils/getUserEmail'
import { salesMockData } from './salesMockData'

export const getSales = async (event, context, callback) => {
  let userEmail = null
  try {
    userEmail = getUserEmail(event)
  } catch (error) {
    return errorResponse('Unauthorized: email not present in JWT', 401)
  }

  const sales = salesMockData.filter((ticket) => ticket.clientEmail === userEmail)
  return succesfullResponse(sales)
}
