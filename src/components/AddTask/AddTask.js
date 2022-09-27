import { useState } from 'react';
import './AddTask.sass'

function AddTask(props){
    let [classLict , setClassList] = useState('task');

    const onDone = () =>{
        if(classLict.includes('done')){
            setClassList(classLict.replace('done',''))
        }else{
            setClassList(classLict += ' done')
            
        }
        
    }

    return (
        <div className={classLict}>
            <div onClick={onDone} className="task_subheader">{props.task}</div>
            <div>
                <button  className='task_button change' onClick={props.edit}></button>
                <button className="task_button delite" onClick={props.delite}></button>
            </div>
        </div>
    )
}

export default AddTask;
