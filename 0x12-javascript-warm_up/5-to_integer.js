#!/usr/bin/node
if (number(process.argv[2])) {
	console.log('My number: ${Number(process.argv[2])}');
} alse {
	console.log('Not anumber')
}
