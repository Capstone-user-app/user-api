import https from 'https'

async function getWarehouseCoords (wid) {
  // first, get all warehouses. Maybe there is (or will be) an endpoint to do this
  // directly with the warehouse id, but for now this should work
  const url = 'https://company-api.pinflag.cl/api/common/warehouse'
  const warehouses = await urlFetch(url)
  let warehouse
  for (let i = 0; i < warehouses.length; i++) {
    warehouse = warehouses[i]
    if (warehouse.id === wid) {
      // iterate through all the warehouses, and return as soon as the first one is found
      // hopelessly inefficient, but it works
      return `https://www.google.com/maps/search/?api=1&query=${warehouse.coordenaday}%2C${warehouse.coordenadax}`
    }
  }
  return null
}

// code "inspired" by:
// https://stackoverflow.com/questions/52951091/how-to-use-async-await-with-https-post-request
function urlFetch (url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      res.setEncoding('utf8')
      let responseBody = ''

      res.on('data', (chunk) => {
        responseBody += chunk
      })

      res.on('end', () => {
        resolve(JSON.parse(responseBody))
      })
    })

    req.on('error', (err) => { reject(err) })

    req.end()
  })
}

export { getWarehouseCoords }
