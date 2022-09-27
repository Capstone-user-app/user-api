
export const getTickets = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      tickets: 'all ticket list',
    },
    body: JSON.stringify({ message: 'All tickets searched' }),
  }
  callback(null, response)
}
