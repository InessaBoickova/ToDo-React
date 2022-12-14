import { useState } from "react"
import './TaskAddForm.sass'


const TaskAddForm = (props)=> {
    let {onAdd} = props;
    let [task,setTask] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(task);
        setTask('')
    }

    const onValueChange= (e)=>{
        setTask(e.target.value)
    }

    return(
        <form className="form" onSubmit = {onSubmit}>
            <input onChange={(e)=>{onValueChange(e)}} 
                    type="text" placeholder="Add your new todo"
                    name="name" value={task} 
                    className="form_input"/>
            <button className="form_btn" type="submit"></button>
        </form>      
    )
  
}

export default TaskAddForm;