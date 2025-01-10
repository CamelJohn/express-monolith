const { context } = require('esbuild');

async function watch() {
    const ctx = await context({
        entryPoints: ['src/index.ts'],
        bundle: true,
        platform: 'node',
        target: 'node18',
        format: 'cjs',
        outfile: 'dist/index.js',
        sourcemap: true,
        external: ['pg-native', 'sqlite3', 'mysql', 'mysql2', 'oracledb', 'better-sqlite3'],
    });

    await ctx.watch();
    console.log('Watching...');
}

watch().catch((err) => {
    console.error(err);
    process.exit(1);
});
