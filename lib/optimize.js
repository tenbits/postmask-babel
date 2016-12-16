"use strict";

var _mask = null;
module.exports = function (mask) {
	_mask = mask;
	["function", "slot", "pipe"].forEach(function (method) {

		_mask.registerOptimizer(method, optimizeNode);
	});
};

function optimizeNode(node, next) {
	// So we could use Babylon with top return settings,
	// but then we can't use popular presets for babel like es2015,
	// as it contains plugin wich transforms root this to undefined;

	var config = _mask.cfg("postmask-babel") || {
		presets: ["es2015"],
		plugins: ["external-helpers"]
	};

	var babel = require("babel-core");
	var source = fn_wrap(node);
	var result = babel.transform(source, config);

	node.body = fn_unwrap(result.code);
	next();
}

function fn_wrap(node) {
	var args = node.args,
	    str = "";
	if (args != null) {
		str = args.map(function (x) {
			return x.prop;
		}).join(",");
	}
	var isAsync = node.flagAsync;
	if (isAsync) {
		node.flagAsync = false;
	}
	return "(" + (isAsync ? "async " : "") + "function (" + str + ") { " + node.body + " })";
}
function fn_unwrap(code) {
	var match = /\(\s*(async\s+)?function/.exec(code);
	if (match == null) {
		throw new Error("Can`t find the prefix from code: " + code);
	}
	var fnStart = match.index,
	    start = code.indexOf("{", fnStart) + 1,
	    end = code.lastIndexOf("}");

	return code.substring(start, end);
}
//# sourceMappingURL=optimize.es6.map