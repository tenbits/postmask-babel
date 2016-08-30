module.exports = function (mask) {
	
	[ 'function', 'slot', 'pipe' ].forEach(method => {

		mask.registerOptimizer(method, optimizeNode);
	});
};

function optimizeNode (node, next) {
	// So we could use Babylon with top return settings,
	// but then we can't use popular presets for babel like es2015,
	// as it contains plugin wich transforms root this to undefined;

	var config = mask.cfg('postmask-babel') || { 
		presets: ['es2015']
	};

	var babel = require('babel-core');
	var source = fn_wrap(node);
	var result = babel.transform(source, config);

	node.body = fn_unwrap(result.code);
	next();
}

function fn_wrap (node) {
	return `(function (${node.args.join(',')}) { ${node.body} })`;
}
function fn_unwrap (code) {
	var fnStart = code.indexOf('(function'),
		start = code.indexOf('{', fnStart) + 1,
		end = code.lastIndexOf('}');

	return code.substring(start, end);
}	