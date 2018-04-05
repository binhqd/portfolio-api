const Factory = require('rosie').Factory;
const faker = require('faker');

module.exports = new Factory()
  .attr('fullName', () => {
    return faker.name.findName();
  })
  .attr('email', () => {
    return faker.internet.email();
  })
  .attr('password', () => {
    return faker.internet.password();
  });
