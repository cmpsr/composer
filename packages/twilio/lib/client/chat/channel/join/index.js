"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = void 0;

const join = (client, name) => {
  return client.getChannelByUniqueName(name).catch(error => {
    if (error.body.code === 50300) {
      // channel doesn't exist, so create it
      return client.createChannel({
        uniqueName: name,
        isPrivate: true
      });
    }

    throw error;
  }).then(channel => channel.join().catch(() => channel)).catch(error => {
    console.log('error', error);
    return null;
  });
};

exports.join = join;