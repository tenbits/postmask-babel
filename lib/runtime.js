"use strict";

["function", "slot", "pipe"].forEach(function (method) {

	mask.cfg("preprocessor.script", function (code) {

		var config = mask.cfg("postmask-babel") || {
			presets: ["es2015"] };

		var source = Babel.transform(code, config).code;
		// Strip out everything, like "use strict", to get the function only
		var index = source.indexOf("function");
		return source.substring(index);
	});
});
//# sourceMappingURL=runtime.es6.map