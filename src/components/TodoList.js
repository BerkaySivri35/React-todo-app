import React, {useEffect, useState} from 'react'
import Form from './Form'
import Todo from './Todo';

function TodoList() {
  const [todo, setTodos] = useState([]);
  

   const [status, setStatus] = useState(["All"])
   const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () => {
    switch(status){
      case 'Active':
        setFilteredTodos(todo.filter(el => el.isComplete === false));
        break;
      case 'Completed':
        setFilteredTodos(todo.filter(el => el.isComplete === true));
        break;
      default:
        setFilteredTodos(todo);
        break;
    }
  }
  useEffect(()=>{
    getLocalTodos();
  },[]);
  

  useEffect(() =>{
    filterHandler();
  if(todo.length !== 0)
    saveLocalTodos()
    
    console.log(todo);
    //console.log('Status',status)
  },[todo,status]);

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todo));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
        let items = JSON.parse(localStorage.getItem('todos'));
        setTodos(items);
    }
    
  };

  const statusHandler = (e) => {
    setStatus(e.target.text)
  }

   const removeTodo = (id) =>{
     const removeArr = [...todo].filter(todo => todo.id !== id)

     setTodos(removeArr);
 }

  const Completed = (id) =>{
    let updateTodo = todo.map(item =>{
      if(item.id === id){
        item.isComplete = !item.isComplete
      }
      return item
    });
    setTodos(updateTodo)
  }

 
  return (
    <div className='todoapp'>
      <header className='header'>
        <h1>
        Todo
        </h1>

      </header>
      
      <Form todo={todo} setTodos= {setTodos} />  
      <Todo todos={todo} removeTodo={removeTodo} Completed={Completed} setStatus ={setStatus} filteredTodos={filteredTodos} statusHandler={statusHandler}
      />  
      
    </div>
  )
}

export default TodoList