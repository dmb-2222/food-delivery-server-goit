
const mainRoute = require("./main/main");
const signupRoute = require("./signup/signup");
const productsRoute = require("./products/products");

const router = {
  "/": mainRoute,
  "/signup": signupRoute,
  "/products": productsRoute,
  default: mainRoute
};

module.exports= router;
