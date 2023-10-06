// SDK initialization

var ImageKit = require('imagekit');

var imagekit = new ImageKit({
  publicKey:
    'public_VQ0zUTXLJ7uxodMQPVF0lugv6yI=',
  privateKey:
    'private_ZAAIBvsIe7PeM/mArJY5S7T3ijQ=',
  urlEndpoint: 'https://ik.imagekit.io/tw9vnwzqj',
});

module.exports = imagekit;
