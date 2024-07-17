export default {
	root: 'src/',
	// publicDir : './public/',
	base: './',
	server: {
		host: true,
		open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
	},
	build: {
		outdir: '/dist/',
		emptyOutDir: true,
		sourcemap: true
	}
};
