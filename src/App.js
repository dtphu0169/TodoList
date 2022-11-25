import logo from './logo.svg';
import './App.css';
import TodoList from './Components/todoList';
import { useCallback, useEffect, useState } from 'react';
import {v4} from 'uuid';

function App() {
  const [todoList,settodoList] = useState([]);
  const [textinput,setTextInput] = useState('');
  const TODO_APP_STORAGE_KEY = 'TODO_APP';


  useEffect(() => {
    const storageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if(storageTodoList){
      settodoList(JSON.parse(storageTodoList))
      console.log(storageTodoList)
    }
    console.log("this is load effect")
  },[]);

  useEffect(() => {
    console.log("this is storage effect")
    localStorage.setItem(TODO_APP_STORAGE_KEY,JSON.stringify(todoList));
    console.log(todoList)
  },[todoList]);

  const onAddbuttonClick = useCallback((e) => {
    console.log(todoList)
    settodoList([{id:v4(),name:textinput,isComplete:false},...todoList])
    setTextInput(""); 
  },[textinput,todoList])

  const OnChangeInput = useCallback((e) => {
    setTextInput(e.target.value)
  },[])

  const onCheckFinishClick = useCallback((id) => {
    settodoList(prevState => prevState.map(todo => todo.id === id ? { ...todo,isComplete :true} : todo) )
  },[])

  return (
    <div className="App">
      <p>TODO List</p>
      <div className='group-input'>
        <input onChange={OnChangeInput} value={textinput} className="add-todo" placeholder='Them viec can lam..'/>
        <button className='add-button' onClick={onAddbuttonClick}>Thêm</button>
      </div>
      <TodoList todoList={todoList} onCheckFinishClick={onCheckFinishClick}></TodoList>
    </div>
  );
}

export default App;
