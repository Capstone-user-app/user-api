/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { getUserEmail } from '../../utils/getUserEmail'
import { salesMockData } from './salesMockData'

export const readSale = async (event, context, callback) => {
  let userEmail = null
  try {
    userEmail = getUserEmail(event)
  } catch (error) {
    return errorResponse('Unauthorized: email not present in JWT', 401)
  }

  const id = event.pathParameters.id
  const sale = salesMockData.filter((sale) => sale.packageId === id)[0]

  if (!sale) {
    return errorResponse('Sale not found', 404)
  }
  if (sale.clientEmail !== userEmail) {
    return errorResponse('Forbidden', 403)
  }

  return succesfullResponse(sale)
}
