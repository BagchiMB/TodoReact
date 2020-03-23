import React, {Component} from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './TodoList.css'


class TodoList extends Component
{
    constructor(props)
    {
        super(props)
        this.state={todos:[]}
        this.create=this.create.bind(this)
        this.remove=this.remove.bind(this)
        this.update=this.update.bind(this)
        this.toggleCompletion=this.toggleCompletion.bind(this)
    }
    create(NewTodoObj)
    {
        this.setState({todos:[...this.state.todos,NewTodoObj]})
    }
    remove(ID)
    {
        this.setState((state) =>
            {
                let array=[]
                for (let i = 0; i < this.state.todos.length; i++) 
                {   
                    if(ID===this.state.todos[i].id)
                    {}
                    else
                    {
                        array.push(this.state.todos[i])
                    }    
                }
                return {todos:array}
            });
    }
    update(ID,updatedTodo)
    {
        this.setState((state) =>
            {
                let array=[]
                for (let i = 0; i < this.state.todos.length; i++) 
                {   
                    if(ID===this.state.todos[i].id)
                    {
                        let updatedTodoObj
                        updatedTodoObj={...this.state.todos[i],Ntodo:updatedTodo}
                        array.push(updatedTodoObj)
                    }
                    else
                    {
                        array.push(this.state.todos[i])
                    }    
                }
                return {todos:array}
            });
    }
    toggleCompletion(ID)
    {
        this.setState((state) =>
            {
                let array=[]
                for (let i = 0; i < this.state.todos.length; i++) 
                {   
                    if(ID===this.state.todos[i].id)
                    {
                        let updatedTodoObj
                        updatedTodoObj={...this.state.todos[i],isCompleted:!this.state.todos[i].isCompleted}
                        array.push(updatedTodoObj)
                    }
                    else
                    {
                        array.push(this.state.todos[i])
                    }    
                }
                return {todos:array}
            });

    }
    render()
    {
        let t=[];
        for (let i = 0; i < this.state.todos.length; i++)
        {
            t.push(<Todo 
                    updateTodo={this.update}
                    toggleCompletion={this.toggleCompletion}
                    removeTodo={this.remove} 
                    todo={this.state.todos[i].Ntodo} 
                    isCompleted={this.state.todos[i].isCompleted} 
                    key={this.state.todos[i].id} 
                    id={this.state.todos[i].id}
                    />)
            
        }
        return(
            <div className="TodoList">
                <h1>Todo List! <span>A Simple React Todo List App.</span></h1>
                <ul>{t}</ul>  
                <NewTodoForm createTodo={this.create} />
                
            </div>
        );
    }
}

export default TodoList