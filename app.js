const argv = require('./config/yargs').argv;
const color = require('colors');
const toDo = require('./to-do/to-do');

const command = argv._[0];

switch (command) {
    case 'create':
        console.log('Create to do');
        let task = toDo.create(argv.description);
        console.log(task);
        break;

    case 'list':
        let list = toDo.getList();
        for (tasks of list) {
            console.log('========To do========'.green);
            console.log('Task:', tasks.description);
            console.log('Completed:', tasks.completed);
            console.log('====================='.green);
            console.log('                     ');
        }
        break;

    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
        break;

    case 'delete':
        let deleted = toDo.deleted(argv.description);
        console.log(deleted);
        break;

    default:
        console.log('This command is not valid');
}