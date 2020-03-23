import React, {Component} from 'react'
import './Todo.css'

class Todo extends Component
{
    constructor(props)
    {
        super(props)
        this.state={isEditing:false,Ntodo:this.props.todo}
        this.handleRemove=this.handleRemove.bind(this)
        this.toggleForm=this.toggleForm.bind(this)
        this.handleUpdate=this.handleUpdate.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleCompletion=this.handleCompletion.bind(this)
    }
    handleRemove()
    {
        this.props.removeTodo(this.props.id)
    }
    toggleForm()
    {
        this.setState({isEditing: !this.state.isEditing})
    }
    handleUpdate(e)
    {

        e.preventDefault()
        this.props.updateTodo(this.props.id,this.state.Ntodo)
        this.toggleForm()
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    handleCompletion()
    {
        this.props.toggleCompletion(this.props.id)
    }
    render()
    {
        let result
        if(this.state.isEditing)
        {
            result= 
            (
                <li>
                    <div className="Todo">
                        <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                            <input type="text" value={this.state.Ntodo} name="Ntodo" onChange={this.handleChange}></input>
                            <button>SAVE</button>
                        </form>    
                    </div>
                </li>
            )
        }
        else
        {
            result=
            (
                <li>
                    <div className="Todo">
                        <p className={this.props.isCompleted ? 'Todo-Task completed':'Todo-Task'} onClick={this.handleCompletion}>{this.props.todo}</p>
                        <div className="Todo-buttons">
                            <button onClick={this.handleRemove}><i class='fas fa-trash'/></button>
                            <button onClick={this.toggleForm}><i class='fas fa-pen'/></button>
                        </div>
                    </div>
                </li>
            )
        }
        return result
    }
}

export default Todo