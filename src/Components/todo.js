import React from "react";
import './todo.css';

export default function Todo({todo,onCheckFinishClick}) {
    
    
    return (
        <button className="item" >{todo.name}
            <input className="cbItem" type={"checkbox"} onClick={() => onCheckFinishClick(todo.id)}></input>
        </button>
    )
}