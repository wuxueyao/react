import React, { Component } from 'react'
import './Todolist.css'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    handleInput =(e)=>{
        var obj ={
            name:e.target.value,
            nows:false
        }
        if(e.keyCode === 13){
            this.props.addTodo(obj);
        }
    }
    render() {
        return (
            <div id='header'>
            <form>
                <label htmlFor="inp">ToDoList</label>
                <input name = "n" required autoComplete="off" value={this.state.n} onKeyDown={this.handleInput} placeholder="添加ToDo" type="text"/>
            </form>
            </div>
        )
    }
}
