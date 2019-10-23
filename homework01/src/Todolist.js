import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import './Todolist.css'
export default class Todolist extends Component {
    constructor(){
        super();
        var t = new Array();
        var d = new Array();
        var n1=0,n2=0;
        var list = JSON.parse(localStorage.getItem('todo')) || [];
        if(list){
            for(var i=0;i<list.length;i++){
                if(list[i].nows == false){
                    t.push(list[i]);
                    n1++;
                }else{
                    d.push(list[i])
                    n2++;
                }
            }      
        }
        this.state = {
            master:list,
            todo:t,
            done:d,
            todonum:n1,
            donenum:n2
        }
        window.onload= function(){
            document.getElementById('in').focus();
        }
    }

    addItem = (msg)=>{
        if(msg.name){
            var count = new Date();
            msg.idx = count;
            var master = [...this.state.master,msg];
            this.setState({
                master:master,
            },()=>{
                localStorage.setItem('todo',JSON.stringify(this.state.master));
            })
        }
    }

    deltodoItem = (a)=>{
        var master = [...this.state.master];
        var todo = [...this.state.todo];
        var todonum = this.state.todonum;
        for(var i=0;i<master.length;i++){
            if(master[i].idx == todo[a].idx){
                master.splice(i,1);
            }
        }
        todo.splice(a,1);
        todonum--;
        this.setState({
            master:master,
            todo:todo,
            todonum:todonum
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.master));
        })   
    }
    delcomtodoItem = (a)=>{
        var master = [...this.state.master];
        var done = [...this.state.done];
        var donenum = this.state.donenum;
        for(var i=0;i<master.length;i++){
            if(master[i].idx == done[a].idx){
                master.splice(i,1);
            }
        }
        done.splice(a,1); 
        donenum--;
        this.setState({
            master:master,
            done:done,
            donenum:donenum
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.master));
        })   
    }

    comItem = (a)=>{
        var master = [...this.state.master];
        var todo = [...this.state.todo];
        var done = [...this.state.done];
        var todonum = this.state.todonum;
        var donenum = this.state.donenum;
        var doneItem;
        for(var i=0;i<master.length;i++){
            if(master[i].idx == todo[a].idx){
                master[i].nows = true;
                doneItem = master[i];
            }
        }
        todo.splice(a,1); 
        done.push(doneItem);
        todonum--;
        donenum++;
        this.setState({
            master:master,
            done:done,
            todo:todo,
            todonum:todonum,
            donenum:donenum,

        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.master));
        })
    }

    incItem = (a)=>{
        var master = [...this.state.master];
        var todo = [...this.state.todo];
        var done = [...this.state.done];
        var todonum = this.state.todonum;
        var donenum = this.state.donenum;
        var incItem;
        for(var i=0;i<master.length;i++){
            if(master[i].idx == done[a].idx){
                master[i].nows = false;
                incItem = master[i];
            }
        }
        done.splice(a,1); 
        todo.push(incItem);
        todonum++;
        donenum--;
        this.setState({
            master:master,
            done:done,
            todo:todo,
            todonum:todonum,
            donenum:donenum
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.master));
        })
    }

    render() {
        return (
            <div>
                <Todoinput addTodo = {this.addItem} incTodo = {this.incItem}/>
                <Todoing donenum={this.state.donenum} todonum={this.state.todonum} comtodo={this.state.done} todo = {this.state.todo} delTodo ={this.deltodoItem} delCom = {this.delcomtodoItem} comTodo = {this.comItem} incTodo = {this.incItem}/>
            </div>
        )
    }
}
