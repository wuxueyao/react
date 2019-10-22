import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';

//事件的绑定和交互
export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3]
        }

        //深拷贝
        // var arr = [1,2,{a:100}];
        // //var b = [...arr];
        // var b = JSON.parse(JSON.stringify(arr));
        // b[2].a = 200;
        // console.log(arr);

        //对象的拷贝
        var a = {a1:100,a2:300};
        var b = {b:200};
        // var o = Object.assign(a,b);  //a和o一样，没有创建新的对象
        var o = Object.assign({},a,b);  //创建了一个新的对象，放进去的，a还是原来的
        console.log(o);
        console.log(a);
        console.log(o === a);

        //遍历对象
        Object.keys(a).forEach((item)=>{
            console.log(item); //属性名称
            console.log(a[item]); //属性值
        })

        //会把不需要的也遍历出来，尽量不要使用for...in遍历
        for(var item in a){
            console.log(item);
        }


    }
    addItem = (msg)=>{
        // this.state.todo.push(msg);
        // console.log(this.state.msg);

        // setState会引起一系列生命周期的改变
        this.setState({
            todo:[...this.state.todo,msg]
        })
        console.log(msg);
    }
    delItem = (a)=>{
        /* this.state.todo.splice(a,1); //不要对状态直接进行处理，不建议写这个
         this.setState({
             todo: this.state.todo
         })*/

         /**深拷贝\浅拷贝
         * 状态（state）：
         * 1.不要直接改变、处理状态
         * 2.setState是异步的
         */

         //1.
        var todo = [...this.state.todo];
        todo.splice(a,1);

        //2.
        //这个拿到的值是上一个state的值加一
        // this.setState((state,；props)=>({todo:state.todo+1})); 

        this.setState({
            todo:todo
        })
        console.log(a);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo = {this.addItem}/>
                <Todoing todo={this.state.todo} delTodo ={this.delItem}/>
                {/* 函数名和属性名没有关系 */}
            </div>
        )
    }
}
