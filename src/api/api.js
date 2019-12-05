import axios from "axios";


const instance = axios.create({
   baseURL: "http://localhost:3001/",
});

export const todoAPI = {
    getLists() {
        return instance.get('/lists')
            .then(response => response.data)
    },
    addList(name, colorId) {
        return instance.post('/lists', {
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
    }

};