import https from 'https'

async function getWarehouseCoords (wid, waddres, winstr) {
  // try to find the Warehouse through the search endpoint. If it fails,
  // try the hard way
  const query = `${process.env.PINFLAG_API_URL}/api/warehouses/search?address=${waddres}&instructions=${winstr}`
  let warehouse = await urlFetch(query)
  if (warehouse && warehouse.id === wid) {
    return generateGMapsUrl(warehouse)
  }
  // first, get all warehouses. Maybe there is (or will be) an endpoint to do this
  // directly with the warehouse id, but for now this should work
  const warehouses = await urlFetch('https://company-api.pinflag.cl/api/common/warehouse')
  for (let i = 0; i < warehouses.length; i++) {
    warehouse = warehouses[i]
    if (warehouse.id === wid) {
      // iterate through all the warehouses, and return as soon as the first one is found
      // hopelessly inefficient, but it works
      return generateGMapsUrl(warehouse)
    }
  }
  return null
}

// code "inspired" by:
// https://stackoverflow.com/questions/52951091/how-to-use-async-await-with-https-post-request
function urlFetch (url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if (res.statusCode === 404) {
        resolve(null)
      }
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

const generateGMapsUrl = (warehouse) => {
  return `https://www.google.com/maps/search/?api=1&query=${warehouse.coordenaday}%2C${warehouse.coordenadax}`
}

export { getWarehouseCoords }
