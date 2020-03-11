const mainRoute = (request, response) => {
  response.writeHead(200, { "Content-type": "text/html" }),
    response.write("<h1>Привет node.js</h1>");
  response.end();
};

module.exports = mainRoute;
