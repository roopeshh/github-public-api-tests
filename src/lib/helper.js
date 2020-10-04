'use strict';
const { TOKEN } = require('../config');

const getAuthHeader = () => {
  return TOKEN;
};

const getAcceptHeader = () => {
  return 'application/vnd.github.mercy-preview+json';
}

module.exports = {
  getAuthHeader,
  getAcceptHeader,
};