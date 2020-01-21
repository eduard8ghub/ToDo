import axios from "axios";


const instance = axios.create({
    baseURL: "https://my-db-todo.herokuapp.com/",
});

export const todoAPI = {
    getListsTasks() {
        return instance.get('/lists?_expand=color&_embed=tasks')
            .then(response => response.data)
    },
    addList(name, color) {
        return instance.post('/lists?_expand=color&_embed=tasks', {
            name: name,
            colorId: color.id,
            tasks: [],
            color: {...color}
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
    },
    changeTaskText(taskText, id) {
        return instance.patch(`/tasks/${id}`, {
            text: taskText
        }).then(response => response.data)
    },
    deleteTask(id) {
        return instance.delete(`/tasks/${id}`)
    },
};
