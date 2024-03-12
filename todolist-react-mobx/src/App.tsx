import './App.css'
import {Provider} from "mobx-react";
import todoStore from "./store.ts";
import {TodoList} from "./TodoList.tsx";

function App() {

  return (
    <>
        <h1>ToDoList</h1>
      <Provider store={todoStore}>
          <TodoList/>
      </Provider>
    </>
  )
}

export default App
