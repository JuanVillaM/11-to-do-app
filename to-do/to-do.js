const fs = require('fs');

let listToDo = [];

const create = (description) => {
    loadData();
    let toDo = {
        description,
        completed: false
    };
    listToDo.push(toDo);
    saveData();
    return toDo;
};

const saveData = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile(`data/data.json`, data, (error) => {
        if (error) throw new Error('The data cannot be saved', error);
    });
};

const loadData = () => {
    try {
        listToDo = require('../data/data.json');
    } catch (error) {
        listToDo = [];
    }
};

const getList = () => {
    loadData();
    return listToDo;
};

const update = (description, completed = true) => {
    loadData();
    let index = listToDo.findIndex(task => task.description === description);
    if (index >= 0) {
        listToDo[index].completed = completed;
        saveData();
        return true;
    } else {
        return false;
    }
};

const deleted = (description) => {
    loadData();
    let newList = listToDo.filter(task => { return task.description !== description });
    if (listToDo.length === newList.length) {
        return false;
    } else {
        listToDo = newList;
        saveData();
        return true;
    }
};

module.exports = {
    create,
    getList,
    update,
    deleted
};