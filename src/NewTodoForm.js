import React, {Component} from 'react'
import './NewTodoForm.css'
import { v4 as uuidv4 } from 'uuid';
class NewTodoForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state={Ntodo:'',isCompleted:false,id:''}
        this.handleClick=this.handleClick.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleClick(e)
    {
        this.setState({[e.target.name]:e.target.value,id:uuidv4(),isCompleted:false})
    }
    handleSubmit(e)
    {
        e.preventDefault()
        this.props.createTodo(this.state)
        this.setState({Ntodo:'',isCompleted:false,id:''})
    }
    render()
    {
        return(
            <div >
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="Ntodo">New Todo</label>
                    <input id="Ntodo" name="Ntodo" value={this.state.Ntodo} onChange={this.handleClick}></input>
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm