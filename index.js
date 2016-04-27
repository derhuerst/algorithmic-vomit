'use strict'

const size     = require('window-size')
const esc      = require('ansi-escapes')
const colors   = require('ansi-256-colors')
const alphabet = require('alphabet')



const char = () => alphabet[Math.round(
	Math.random() * (alphabet.length - 1))]

const color = (pattern, x, y) => colors.fg.codes[20 + Math.round(
	(colors.fg.codes.length - 21) * pattern(x, y))] || colors.fg.codes[0]

const fill = (pattern) => {
	process.stdout.write(esc.clearScreen)
	for (let y = 0; y < (size.height - 1); y++) {
		for (let x = 0; x < size.width; x++) {
			// console.log(pattern(x, y))
			process.stdout.write(
				  color(pattern, x, y)
				+ char()
				+ colors.reset)
		}
	}
}

module.exports = fill
