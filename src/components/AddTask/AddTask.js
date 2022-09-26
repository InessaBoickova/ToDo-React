import './AddTask.sass'

function AddTask(props){
    return (
        <div className="task">
            <div className="task_subheader">{props.task}</div>
            <div>
                <button  className='task_button change'></button>
                <button className="task_button delite" onClick={props.delite}></button>
            </div>
        </div>
    )
}

export default AddTask;
