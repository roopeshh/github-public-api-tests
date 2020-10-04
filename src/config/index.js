'use strict';

const config = {
  SERVICE_URL: `https://${process.env.EXTERNAL_URL}`,
  USERNAME: process.env.GITHUB_USERNAME,
  TOKEN: process.env.GITHUB_TOKEN,
};

module.exports = config;
