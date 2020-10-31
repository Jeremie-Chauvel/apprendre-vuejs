const path = require('path');
const express = require('express');

module.exports = (app) => {
  app.use(
    '/catalog/man',
    express.static(path.join(__dirname, 'catalog', 'man'), {
      extensions: ['json'],
    })
  );
};
