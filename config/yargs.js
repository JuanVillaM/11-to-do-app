const description = {
    demand: true,
    alias: 'd',
    desc: 'Describes a task to do'
};

const completed = {
    alias: 'c',
    default: true,
    desc: 'Updates a task to do'
};


const argv = require('yargs')
    .command('create', 'Creates a task to do', { description })
    .command('update', 'Updates the complete status of a task', { description, completed })
    .command('delete', 'Delete a task', { description })
    .help()
    .argv;

module.exports = {
    argv
};