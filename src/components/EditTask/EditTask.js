import { useState } from 'react';
import './editTask.sass'
function EditTask (props){
    const [newText, setNewText] = useState(props.text);
    return(
        <div className="edit">
           <input type="text" value={newText}  className='edit_input' onChange={(e)=> setNewText(e.target.value)}/>
           <button className='edit_btn'>Add</button>
        </div>
    )
}

export default EditTask;