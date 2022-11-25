import React from "react";
import Todo from "./todo";

export default function TodoList({todoList,onCheckFinishClick}) {
    return (
        <>
            {
            todoList.map(todo => <Todo key={todo.id} todo={todo} onCheckFinishClick={onCheckFinishClick}></Todo>)
            }
        </>
        
    );
}
