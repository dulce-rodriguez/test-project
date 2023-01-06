const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Alvaro Morales');
});

module.exports = routes;
