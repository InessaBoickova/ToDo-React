import { Component } from "react"
import './TaskAddForm.sass'

class TaskAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            task : ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.task);
        this.setState({
            task: '',
        })
    }

    onValueChange= (e)=>{
        this.setState({
           task : e.target.value
        })
    }

    render(){
        return(
            <form className="form" onSubmit = {this.onSubmit}>
                <input onChange={(e)=>{this.onValueChange(e)}}  type="text" placeholder="Add your new todo" name="name" value={this.state.task} className="form_input"/>
                <button className="form_btn" type="submit" ></button>
            </form>      
        )
    }
}

export default TaskAddForm;