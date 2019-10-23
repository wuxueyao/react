import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todolist.css'
export default class Todoing extends Component {
    render() {
        return (
            <div id="inner">
                <h2>正在进行 <span>{this.props.todonum}</span></h2>              
                <ol> 
                    {
                        this.props.todo.map((value,key)=>
                        <li key={key}>
                            <p>
                                <input type="button" onClick={()=>{this.props.comTodo(key)}}></input>
                                {value.name}
                                <a onClick={()=>this.props.delTodo(key)}>-</a>
                            </p>
                        </li>)
                    }
                </ol>

                <h2>已经完成 <span>{this.props.donenum}</span></h2>
                <ul>
                    {
                        this.props.comtodo.map((value,key)=>
                        <li key={key}>
                            <p>
                                <input type="checkbox" onClick={()=>this.props.incTodo(key)} readOnly checked></input>
                                {value.name}
                                <a onClick={()=>this.props.delCom(key)}>-</a>
                            </p>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}
