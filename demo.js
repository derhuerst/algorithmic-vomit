'use strict'

const size   = require('window-size')
const Noise  = require('simplex-noise')
const Worley = require('worley-noise')
const noise  = new Noise(() => Math.random())
const worley = new Worley(10)

const fill   = require('./index')


const patterns = {
	  random:     () => Math.random()
	, horizontal: (x) => x / (size.width - 1)
	, vertical:   (x, y) => y / (size.height - 1)
	, simplex:    (x, y) => Math.abs(noise.noise2D(x/40, y/50))
	, crazy:      (x, y) => Math.abs(noise.noise2D(x/35, y/35))
	, worley:     (x, y) => Math.abs(worley.getManhattan(x/40, y/45, 2)/3)
	, stripes:    (x, y) => {
		x /= size.width - 1
		y /= size.height - 1
		return .5 * (x - Math.floor(x) + y - Math.floor(y))
	}
}

fill(patterns.stripes)
