fs = require('fs')

const now = new Date()
fs.writeFile('docs/time.js', `var LAST_WIN = ${now.getTime()};`, () => {
	console.log('You lost the game. Git commit and push.')
})