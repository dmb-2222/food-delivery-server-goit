const productsDB = require('../../db/products/all-products.json')

const productsRoute = (request, response) => {
  response.writeHead(200, { "Content-type": "text/html" }),
    response.write(JSON.stringify(productsDB));
  response.end();
};

module.exports = productsRoute;
