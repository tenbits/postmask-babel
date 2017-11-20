module.exports = {
	suites: {
		dom: {
			exec: 'dom',
			env: [
				'/node_modules/babel-standalone/babel.min.js',
				'/node_modules/maskjs/lib/mask.js::mask',
				'/lib/runtime.js'
			],
			tests: 'test/dom.test'
		},
		node: {
			exec: 'node',
			env: [
				
			],
			tests: 'test/node.test'
		}
	}
}