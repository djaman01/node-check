//https://www.npmjs.com/package/generate-password

var generator = require('generate-password');

var passwords = generator.generateMultiple(10, {
	length: 10,
	uppercase: false
});

// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);