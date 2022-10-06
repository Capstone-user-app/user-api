import https from 'https'

async function getWarehouseCoords (wid) {
  // first, get all warehouses. Maybe there is (or will be) an endpoint to do this
  // directly with the warehouse id, but for now this should work
  const url = 'https://company-api.pinflag.cl/api/common/warehouse'
  const warehouses = await urlFetch(url)
  // set up the template for the Google Maps URL
  const gMapsTemplate = `https://www.google.com/maps/search/?api=1&query=${0}%2C${1}`
  warehouses.forEach((warehouse) => {
    if (warehouse.id === wid) {
      // iterate through all the warehouses, and return as soon as the first one is found
      // hopelessly inefficient, but it works
      return gMapsTemplate(warehouse.coordenaday, warehouse.coordenadax)
    }
    return null
  })
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
