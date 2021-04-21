'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const createRequest = supertest(server);

describe('**MY SECOND SERVER**', () => {
  it('should create a new item in the db', async () => {
    const response = await createRequest.post('/things').send({ name: 'Jason'})
      expect(response.status).toBe(201);
      expect(results.body.record.name).toEqual('Jason');
    });
    
    it('should retreive an item in the db', async () => {
    const response = await createRequest.get('/things/1')
    expect(response.status).toBe(200);
  });  
  it('should retrieve all items from the db', async () => {
    const response = await createRequest.get('/things')
    expect(response.status).toBe(200);
  });
});

  


// NOTES FROM EARLIER
// describe('**MY SERVER**', () => {
//   it('should respond with a 404 on not found', async () => {
//     return createRequest.get().then(data => { // the route is empy ATM because our route will be changed today, remember to update in the "()" so we don't get an error
//       expect(data.status).toBe(404);
//     })
//   })

//   it('should respond with a 500 on server not found', async () => {
//     return createRequest.get().then(data => {// the route is empy ATM because our route will be changed today, remember to update in the "()" so we don't get an error
//       expect(data.status).toBe(500);
//     })
//   })

//   it('should repsond properly to a GET: ', async () => { // the route in () should match the line 21
//     const response = await createRequest.get();// the route is empy ATM because our route will be changed today, remember to update in the "()" so we don't get an error
//     expect(response.status).toBe(200);
//     expect(response.text).toBe(''); //need to update the expexted response TO-DO
//   })
// })