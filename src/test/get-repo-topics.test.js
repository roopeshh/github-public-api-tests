'use strict';

const { createRepoWithAuthenticatedUser, getRepoTopics, getRepoTopicsWithOutAcceptHeader, deleteRepoWithAuthenticatedUser } = require('../lib/api-test-defs');
const data = require('../data/data-helper-create-repo');
const { USERNAME } = require('../config/index');
const uuid = require('uuid');
const { StatusCodes } = require('http-status-codes');

describe('GET /repos/:user/:repo/topics - gets topics related to the repository', () => {
  const name = `${data.data_one.name}_${uuid.v4()}`;
  beforeAll(async () => {
    data.data_one.name = name;
    await createRepoWithAuthenticatedUser(data.data_one);
  });

  it('returns 200 - gets repository topics owned by the user by name', async () => {
    const response = await getRepoTopics(USERNAME,name);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.names).toEqual([]);
  });

  it('returns 415 - unsupported media type on missing Accept header', async () => {
    const response = await getRepoTopicsWithOutAcceptHeader(USERNAME,name);
    expect(response.status).toBe(StatusCodes.UNSUPPORTED_MEDIA_TYPE);
    expect(response.body.message).toBe("If you would like to help us test the Repository Topics API during its preview period, you must specify a custom media type in the 'Accept' header. Please see the docs for full details.")
  });

  afterAll( async () => {
    await deleteRepoWithAuthenticatedUser(USERNAME, name);
  });
});