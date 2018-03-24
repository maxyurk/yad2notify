const PushBullet = require('pushbullet');
const { pushbulletAccessTokens } = require('../config');

const pusher = new PushBullet(pushbulletAccessTokens);

async function pushToAll(title, body) {
  return new Promise((res, rej) => {
    pusher.note(null, title, body, (error, response) => {
      if (error) {
        rej(error);
        return;
      }
      res(response);
    });
  });
}

module.exports = { pushToAll };
