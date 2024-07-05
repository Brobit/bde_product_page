export default {
	root: 'src/',
	// publiDir : '../public',
	base: './',
	server: {
		host: true,
		open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
	},
	build: {
		outdir: 'prod/',
		emptyOutDir: true,
		sourcemap: true
	}
};
