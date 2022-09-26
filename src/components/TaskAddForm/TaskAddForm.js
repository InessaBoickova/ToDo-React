import { useState } from "react"

const TaskAddForm = () =>{
    const [text , setText] = useState('');
    return(
        <div className="checklist_wrapper">
            <input onChange={(e)=>{setText(e.target.value)}}  type="text" placeholder="Add your new todo" name="name" value={text} className="checklist_input"/>
            <button className="checklist_btn"></button>
        </div>      
    )
}

export default TaskAddForm;