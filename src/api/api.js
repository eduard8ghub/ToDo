import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:3001/",
});

export const todoAPI = {
    getLists() {
        return instance.get('/lists')
            .then(response => response.data)
    },
    getListsTasks() {
        return instance.get('/lists')
            .then(response => response.data)
    },
    addList(name, colorId) {
        return instance.post('/lists', {
            name, colorId
        })
            .then(response => response.data)
    },
    addListTasks(name, colorId) {
        return instance.post('/lists?_expand=color&_embed=tasks', {
            name, colorId
        })
            .then(response => response.data)
    },
    deleteList(id) {
        return instance.delete(`/lists/${id}`)
    },
    getColors() {
        return instance.get('/colors')
            .then(response => response.data)
    },
    getTasks() {
        return instance.get('/lists?_expand=color&_embed=tasks')
            .then(response => response.data)
    },
    changeTaskTitle(text, id) {
        return instance.patch(`/lists/${id}/?_expand=color&_embed=tasks`, {
            name: text
        }).then(response => response.data)
    },
    addTask(text, id) {
        return instance.post(`/tasks`, {
            listId: id,
            text: text,
            completed: false
        }).then(response => response.data)
    },
    changeTaskCheck(checkStatus, id) {
        return instance.patch(`/tasks/${id}`, {
            completed: checkStatus
        }).then(response => response.data)
    }
};