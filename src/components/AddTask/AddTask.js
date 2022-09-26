import './AddTask.sass'
function AddTask(props){
    return (
        <div className="task">
            <div className="task_subheader">{props.task}</div>
            <button className="task_button"></button>
        </div>
    )
}

export default AddTask;
