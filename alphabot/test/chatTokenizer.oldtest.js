let { tokenizer } = require('../helpers/commandHandler');

describe('sends a IRC chat output to the tokenizer', () => {
  it('it should return a comment object', (done) => {
    let obj = {
      channel: '#scriptx',
      user: 'threeSevenX',
      command: '!myCommand',
      args: ['13', 'OK'],
    };
    tokenizer('[13:37] info: [#scriptx] <threeSevenX>: !myCommand 13 OK').then(
      (token) => {
        expect(token).toMatchObject(obj);
        done();
      }
    );
  });
});

describe('sends a message from IRC to tokenizer', () => {
  it('it should return undefined', (done) => {
    tokenizer(
      '[13:37] info: [#scriptx] <lilUser>: you are my fav streamer'
    ).then((token) => {
      expect(token).toBeUndefined();
      done();
    });
  });
});
