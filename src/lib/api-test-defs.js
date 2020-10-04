const request = require('supertest');
const { SERVICE_URL } = require('../config');
const helper = require('./helper')
const { AUTHORIZATION, ACCEPT } = require('../config/headers')

const createRepoWithOutAuthenticatedUser = () => {
  return request(SERVICE_URL)
    .post('/user/repos');
};

const createRepoWithAuthenticatedUser = payload => {
  return request(SERVICE_URL)
    .post('/user/repos')
    .set(AUTHORIZATION, `token ${helper.getAuthHeader()}`)
    .send(payload);
};

const getRepoTopicsWithOutAcceptHeader = (username, repoName) => {
  return request(SERVICE_URL)
    .get(`/repos/${username}/${repoName}/topics`)
    .set(AUTHORIZATION, `token ${helper.getAuthHeader()}`);
};

const getRepoTopics = (username, repoName) => {
  return request(SERVICE_URL)
    .get(`/repos/${username}/${repoName}/topics`)
    .set(AUTHORIZATION, `token ${helper.getAuthHeader()}`)
    .set(ACCEPT, helper.getAcceptHeader());
};

const getRepoWithAuthenticatedUser = (username, repoName) => {
  return request(SERVICE_URL)
    .get(`/repos/${username}/${repoName}`)
    .set(AUTHORIZATION, `token ${helper.getAuthHeader()}`);
};

const deleteRepoWithAuthenticatedUser = (username, repoName) => {
  return request(SERVICE_URL)
    .delete(`/repos/${username}/${repoName}`)
    .set(AUTHORIZATION, `token ${helper.getAuthHeader()}`);
};

module.exports = {
  createRepoWithOutAuthenticatedUser,
  createRepoWithAuthenticatedUser,
  deleteRepoWithAuthenticatedUser,
  getRepoWithAuthenticatedUser,
  getRepoTopics,
  getRepoTopicsWithOutAcceptHeader
};