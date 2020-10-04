'use strict';

const { createRepoWithAuthenticatedUser, getRepoWithAuthenticatedUser, deleteRepoWithAuthenticatedUser } = require('../lib/api-test-defs');
const data = require('../data/data-helper-create-repo');
const { USERNAME } = require('../config/index');
const uuid = require('uuid');
const { StatusCodes } = require('http-status-codes');

describe('GET /repos/:user/:repo - get all the repositories for the authenticated user', () => {
  const name = `${data.data_one.name}_${uuid.v4()}`;
  beforeAll(async () => {
    data.data_one.name = name;
    await createRepoWithAuthenticatedUser(data.data_one);
  });

  it('returns 200 - gets repository owned by the user by name', async () => {
    const response = await getRepoWithAuthenticatedUser(USERNAME,name);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.name).toBe(name);
    expect(response.body.owner.login).toBe(USERNAME);
  });

  it('returns 404 - on trying to get non existing repo', async () => {
    const response = await getRepoWithAuthenticatedUser(USERNAME, "Non_Existing");
    expect(response.status).toBe(StatusCodes.NOT_FOUND);
  });

  afterAll( async () => {
    await deleteRepoWithAuthenticatedUser(USERNAME, name);
  });

});