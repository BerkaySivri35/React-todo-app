import { click } from '@testing-library/user-event/dist/click'
import React from 'react'
import TodoList from './TodoList'

function Todo({todos,removeTodo,Completed, filteredTodos,setStatus,statusHandler, RemoveComplete}) {
	return (	
	<div className='main'>
		<input class="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ul class="todo-list">
			{
			filteredTodos.map((item,index)=>(
				<li key={index} 
					className={item.isComplete === false ? null : 'completed'}
					>
					<div class="view">
					<input class='toggle' type="checkbox" onClick={()=>{Completed(item.id)}} />
					<label>{item.todo}</label>
					<button class="destroy" onClick={() =>{
                                removeTodo(item.id)
                                }}></button>
				</div>
						
				</li>
			))
		}
			
		</ul>
	<footer class="footer">
		<span class="todo-count">
			<strong>{filteredTodos.length}</strong> items left
		</span>

		<ul class="filters"onClick={statusHandler}>
			<li>
				<a href="#/"  value="All">All</a>
			</li>
			
			<li>
				<a href="#/"  value="Active">Active</a>
			</li>
			<li>
				<a href="#/" >Completed</a>
			</li>
		</ul>

	</footer>
	</div>					
	 
)
}

export default Todo