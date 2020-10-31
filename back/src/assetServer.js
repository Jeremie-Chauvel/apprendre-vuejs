const path = require('path');
const express = require('express');

module.exports = (app) => {
  app.use(
    '/image',
    express.static(path.join(__dirname, '..', 'assets', 'images'))
  );
  app.use(
    '/script',
    express.static(path.join(__dirname, '..', 'assets', 'scripts'))
  );
};
