// requiring the dev-dependencies
let server = require('../src/server');
let request = require('supertest');

describe('/GET root path', () => {
    it('it should GET the root path', (done) => {
        request(server)
           .get('/')
            .expect(200, done);
    });
});

describe('/GET not existing path', () => {
   it('it should try GET non existing path', (done) => {
       request(server)
          .get('/thisDoesntExists')
          .expect(404, done)
   });
});

describe('/GET root path to check headers', () => {
   it('it should GET to the root path and have the helmet default headers set', (done) => {
      request(server)
          .get('/')
          .expect('X-DNS-Prefetch-Control', 'off')
          .expect('X-Frame-Options', 'SAMEORIGIN')
          .expect('X-Download-Options', 'noopen')
          .expect('X-Content-Type-Options', 'nosniff')
          .expect('X-XSS-Protection', '0'/*'1; mode=block'*/)
          .expect(200, done);
          });
});
server.close();