
// requiring the dev-dependencies
var server = require('../src/server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
describe('/GET root path', () => {
    beforeEach(function () {
        server = require('../src/server');
    });
    afterEach(function () {
        server.close();
    });
    it('it should GET the root path', (done) => {
        chai.request(server)
           .get('/')
           .end((end, res) => {
               res.should.have.status(200);
               done();
           });
    });
});

describe('/GET not existing path', () => {
    beforeEach(function () {
        server = require('../src/server');
    });
    afterEach(function () {
        server.close();
    });
   it('it should try GET non existing path', (done) => {
       chai.request(server)
          .get('/thisDoesntExists')
          .end((err, res) => {
             res.should.have.status(404);
             done();
          });
   });
});

describe('/GET root path to check headers', () => {
    beforeEach(function () {
        server = require('../src/server');
    });
    afterEach(function () {
        server.close();
    });
   it('it should GET to the root path and have the helmet default headers set', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
              expect(res).to.have.header('X-DNS-Prefetch-Control', 'off');
              expect(res).to.have.header('X-Frame-Options', 'SAMEORIGIN');
              expect(res).to.have.header('Strict-Transport-Security');
              expect(res).to.have.header('X-Download-Options', 'noopen');
              expect(res).to.have.header('X-Content-Type-Options', 'nosniff');
              expect(res).to.have.header('X-XSS-Protection', '1; mode=block');
              expect(res).to.have.header('X-RateLimit-Limit');
              expect(res).to.have.header('X-RateLimit-Remaining');
              done();
          });
       afterEach( ( done ) => {
           server.close(done());
       });
   });
});

