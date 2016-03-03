import commands from './commands';
import program from 'commander';

var cmdValue, envValue;

program
  .version('0.0.1')
  .arguments('<cmd> [arg2] [arg2]')
  .action((cmd, ...args) => {
     cmdValue = cmd;
     argsValue = args;
  });

program.parse(process.argv);

if (typeof cmdValue === 'undefined') {
   console.error('no command given!');
   process.exit(1);
}

commands[cmdValue](...argsValue);

console.log('command:', cmdValue);
console.log('environment:', envValue || "no environment given");

new TodoApp();