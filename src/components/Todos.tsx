import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  // ** React.FC es un functional component
  const todosCtx = useContext(TodosContext);
  return (
    <>
      <ul>
        {todosCtx.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
