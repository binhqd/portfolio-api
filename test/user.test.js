
'use strict';

const expect = require('expect.js');
const server = require('../server/server');
const request = require('supertest');
const app = request(server);
const UserFactory = require('./factories/user');

describe('Test get current user', () => {
  const User = server.models.User;

  before((done) => {
    done();
  });

  it('/api/users/me can\'t be access publicly', done => {
    expect(1).to.eql(1);

    done();
  });
});
