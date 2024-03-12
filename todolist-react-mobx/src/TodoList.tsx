import {observer} from "mobx-react";
import store from "./store.ts";


export const TodoList = observer(() => {
    const handleAddToDo = () => {
        const text = prompt("Введите текст задачи");
        if (text){
            store.addTodo(text)
        }
    }

    const handleRemoveTodo = (id: number) => {
        store.removeTodo(id)
    }

    return (
        <>
            <button onClick={handleAddToDo}>Add</button>
            {store.todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                </li>
            ))}
        </>
    )

})

