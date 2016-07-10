"use strict";

["function", "slot", "pipe"].forEach(function (method) {

	mask.registerOptimizer(method, function (node, next) {

		// So we could use Babylon with top return settings,
		// but then we can't use popular presets for babel like es2015,
		// as it contains plugin wich transforms root this to undefined;

		var config = mask.cfg("postmask-babel") || {
			presets: ["es2015"]
		};

		var babel = require("babel-core");
		var source = fn_wrap(node);
		var result = babel.transform(source, config);

		node.body = fn_unwrap(result.code);
		next();
	});
});

function fn_wrap(node) {
	return "(function (" + node.args.join(",") + ") { " + node.body + " })";
}
function fn_unwrap(code) {
	var start = code.indexOf("{") + 1,
	    end = code.lastIndexOf("}");

	return code.substring(start, end);
}
//# sourceMappingURL=optimize.es6.map