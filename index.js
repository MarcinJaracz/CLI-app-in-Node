import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';
import { getCurrentDirectoryBase, directoryExits } from './lib/files.js';

const cliAppInNode = new Command();

cliAppInNode
    .command('init')
    .description('Draw app banner')
    .action(() => {
        clear();
        console.log(chalk.green(figlet.textSync('CLI App in Node', { horizontalLayout: 'full' })));
    });

cliAppInNode.parse(process.argv);

if (!cliAppInNode.args.length) {
    cliAppInNode.help();
}
