import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    state = {mouse:false}

    handleMouse =(flag)=>{
        console.log(flag)
        this.setState({mouse:flag})
    }
    handleCheck = (id) => {
        return (event)=>{
            this.props.updateTodo(id, event.target.checked)
        }
    }
    handleDelete = (id)=> {
        this.props.deleteTodo(id)
        console.log(id)
    }
    render(){
        const {todos} = this.props
        return(
            <ul className='todo-main'>
                {todos.map(todo=>{
                    return(
                        <li style={{backgroundColor:this.state.mouse? '#ddd' : 'white'}}
                            onMouseEnter={()=>this.handleMouse(true)} 
                            onMouseLeave={()=>this.handleMouse(false)} 
                            key={todo.id}>
                            <label>
                                <input type="checkbox" checked={todo.done}
                                    onChange={this.handleCheck(todo.id)}/>
                                <span>{todo.name}</span>
                              </label>
                            <button 
                            onClick={()=>this.handleDelete(todo.id)} className='btn btn-danger' style={{display:this.state.mouse? 'block' : 'none'}}>
                                delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}