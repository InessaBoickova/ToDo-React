import { Fragment } from "react";
import AddTask from "../AddTask/AddTask";

function Task(props){
    const elem = props.data.map((item) => {
        let {id,task} = item;
        return (
             <AddTask key = {id}
                     task = {task}
                     delete ={() => props.delete(id)}/>
        )
    })
    
    return (
        <Fragment>
            {elem}
        </Fragment>
    )
}

export default Task;