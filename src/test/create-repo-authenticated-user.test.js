'use strict';

const { createRepoWithAuthenticatedUser, createRepoWithOutAuthenticatedUser, deleteRepoWithAuthenticatedUser } = require('../lib/api-test-defs');
const data = require('../data/data-helper-create-repo');
const { USERNAME } = require('../config/index');
const uuid = require('uuid');
const { StatusCodes } = require('http-status-codes');

describe('POST /user/repos - creates a new repository for an authenticated user', () => {
  it('returns 401 - unauthorized as the user is not logged in', async () => {
    const response = await createRepoWithOutAuthenticatedUser();
    expect(response.status).toBe(StatusCodes.UNAUTHORIZED);
    expect(response.body.message).toBe('Requires authentication');
  });
  it('returns 422 - on passing blank request body', async () => {
    const response = await createRepoWithAuthenticatedUser(data.data_invalid);
    expect(response.status).toBe(StatusCodes.UNPROCESSABLE_ENTITY);
  });
  it('returns 201 - creates repository by only passing name', async () => {
    const name = `${data.data_one.name}_${uuid.v4()}`;
    data.data_one.name = name;
    const response = await createRepoWithAuthenticatedUser(data.data_one);
    expect(response.status).toBe(StatusCodes.CREATED);
    expect(response.body.name).toBe(name);
    expect(response.body.owner.login).toBe(USERNAME);
    expect(response.body.full_name).toBe(`${USERNAME}/${name}`);
    expect(response.body.private).toBe(false);
    await deleteRepoWithAuthenticatedUser(USERNAME, name);
  });
  it('returns 201 - creates repository by only passing few fields', async () => {
    const name = `${data.data_two.name}_${uuid.v4()}`;
    data.data_two.name = name;
    const response = await createRepoWithAuthenticatedUser(data.data_two);
    expect(response.status).toBe(StatusCodes.CREATED);
    expect(response.body.name).toBe(name);
    expect(response.body.owner.login).toBe(USERNAME);
    expect(response.body.description).toBe(data.data_two.description);
    expect(response.body.private).toBe(data.data_two.private);
    await deleteRepoWithAuthenticatedUser(USERNAME, name);
  });
});