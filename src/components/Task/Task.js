import { Fragment } from "react";
import EditTask from "../EditTask/EditTask";
import AddTask from "../AddTask/AddTask";

function Task(props){
    const elem = props.data.map((item) => {
        let{id,task,show} = item;
        return (
           <Fragment>
             <AddTask key = {id}
                     task = {task}
                     delite ={() => props.delite(id)}
                     edit ={() => props.edit(id)} />
                { show
                    ? <EditTask text={props.editText}/>
                    : null
}
           </Fragment>
        )
       
    })
    return (
        <Fragment>
            {elem}
        </Fragment>
    )
}


export default Task;