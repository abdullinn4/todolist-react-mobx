import { makeAutoObservable } from "mobx";

let nextId = 1;

interface Todo {
    id: number,
    text: string,
}
class Store{
    todos : Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }
    addTodo = (text: string) => {
        this.todos.push({id: nextId++, text });
    }
    removeTodo = (id: number) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}
const todoStore = new Store();
export default todoStore;