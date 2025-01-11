#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');

async function regiser_module_routes(module_name) {
    try {
        const main_routes_file_path = path.join('src', 'app', 'main.routes.ts');

        const main_routes_file = await fs.readFile(main_routes_file_path, { encoding: 'utf8' });

        const main_routes_file_content = main_routes_file.split('\n');

        const index_of_main_routes_expression = main_routes_file_content.indexOf(
            'const main_routes = Router();'
        );

        main_routes_file_content.splice(
            index_of_main_routes_expression - 1,
            0,
            `import ${module_name}_routes from './modules/${module_name}';`
        );

        const index_of_export = main_routes_file_content.indexOf('export default main_routes;');

        main_routes_file_content.splice(
            index_of_export - 1,
            0,
            `main_routes.use('/${module_name}', ${module_name}_routes);`
        );

        const updated_content = main_routes_file_content.join('\n');

        await fs.writeFile(main_routes_file_path, updated_content, { encoding: 'utf8' });
    } catch (error) {
        console.error({ error });
    }
}

const [module_name] = process.argv.slice(2);

regiser_module_routes(module_name);

exports.regiser_module_routes = regiser_module_routes;
