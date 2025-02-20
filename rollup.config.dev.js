export default [{
	input: "lib/z-worker.js",
	output: [{
		file: "lib/z-worker-inline.js",
		format: "umd"
	}]
}, {
	input: "lib/z-worker-inline.js",
	output: [{
		intro:
			`
			export default (configure) => { 
				if (typeof URL.createObjectURL == "function") {
					const code = \`
			`,
		file: "lib/z-worker-inline.js",
		outro:
			`		\`;
					const uri = URL.createObjectURL(new Blob([code], { type : "text/javascript" })); 
					configure({ workerScripts: { inflate: [uri], deflate: [uri] } });
				}
			};`,
		format: "esm"
	}]
}, {
	input: ["lib/zip.js"],
	output: [{
		file: "dist/zip.min.js",
		format: "umd",
		name: "zip"
	}, {
		file: "dist/zip.js",
		format: "umd",
		name: "zip"
	}]
}, {
	input: ["lib/zip-full.js"],
	output: [{
		file: "dist/zip-full.min.js",
		format: "umd",
		name: "zip"
	}, {
		file: "dist/zip-full.js",
		format: "umd",
		name: "zip"
	}]
}, {
	input: "lib/zip-no-worker.js",
	output: [{
		file: "dist/zip-no-worker.min.js",
		format: "umd",
		name: "zip"
	}]
}, {
	input: "lib/zip-no-worker-deflate.js",
	output: [{
		file: "dist/zip-no-worker-deflate.min.js",
		format: "umd",
		name: "zip"
	}]
}, {
	input: "lib/zip-no-worker-inflate.js",
	output: [{
		file: "dist/zip-no-worker-inflate.min.js",
		format: "umd",
		name: "zip"
	}]
}, {
	input: "lib/zip-fs.js",
	output: [{
		file: "dist/zip-fs.min.js",
		format: "umd",
		name: "zip"
	}, {
		file: "dist/zip-fs.js",
		format: "umd",
		name: "zip"
	}]
}, {
	input: "index.js",
	output: [{
		file: "dist/zip-fs-full.min.js",
		format: "umd",
		name: "zip"
	}, {
		file: "dist/zip-fs-full.js",
		format: "umd",
		name: "zip"
	}]
}, {
	input: "lib/z-worker-bootstrap-pako.js",
	output: [{
		file: "dist/z-worker-pako.js",
		format: "iife"
	}]
}, {
	input: "lib/z-worker-bootstrap-fflate.js",
	output: [{
		file: "dist/z-worker-fflate.js",
		format: "iife"
	}]
}, {
	input: "lib/z-worker.js",
	output: [{
		file: "dist/z-worker.js",
		format: "iife"
	}]
}];