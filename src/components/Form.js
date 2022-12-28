import React,{useState, useEffect} from 'react'

const InitialFormValues = {id:null, todo:'', isComplete:false}
function Form({todo,setTodos}) {
    const [form, setForm] = useState(InitialFormValues)

    useEffect(() =>{
        setForm(InitialFormValues)
    },[todo])

    const onChangeInput = (e) =>{ 
        setForm({...form, [e.target.name]: e.target.value, id:Math.floor(Math.random() * 10000), isComplete:false});
    }

    const onSubmitForm = (e) =>{
        e.preventDefault()
        form.todo === '' ? alert('Boş değer eklenemez.') : setTodos([...todo,form])
        
        

    }

  return (
    <form onSubmit={onSubmitForm}>
        <input 
            placeholder="Ne yapacaksın ?"
            name="todo"  
            value={form.todo}
            className='new-todo'
            
            onChange={onChangeInput}/>
        
    </form>
  )
}

export default Form