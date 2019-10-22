import React, { Component } from 'react'

/**
 * 子组件---->父组件传递数据，调用子组件时往子组件传递一个函数
 * 子组件通过props调用该函数
 */

/**
 * 受控组件和非受控组件
 * 受控组件：value值被react的状态控制
 *          可以方便拿到input框的值、实时获取或处理输入的内容
 *         （每输入一次就会变推荐使用受控组件）
 * 非受控组件：代码简单、比较适用于一次性获取表单的值
 */
/* 01. 受控组件*/
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
            n1:0,
            n2:0
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
            // this.props.addTodo(this.state.value);
        }
    }
    handleChange =(e) =>{
        this.setState({
            [e.target.name] : parseInt(e.target.value)
        })
    }
    render() {
        return (
            <div>
                {/* input属性加上value值就不能改变了 */}
                {/* <input onChange={(e)=>this.handleInput} value='dwefd' type="text"/> */}
                {/* <input onKeyDown={this.handleInput} type="text"/>
                <input onKeyDown={this.handleInput} type="text"/> */}
                <label htmlFor="inp">输入：</label>
                <input name="n1" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown={this.handleInput}  type="text"/>
                +
                <input name="n2" onChange={(e)=>this.handleChange(e)} value={this.state.n2} onKeyDown={this.handleInput}  type="text"/>
                <p>{this.state.n1+this.state.n2}</p>
                
                <button>查询</button>
            </div>
        )
    }
}

/* 02. 非受控组件*/
// export default class Todoinput extends Component {
//     componentDidMount(){
//         console.log(this.inp.value);
//         console.log(this.refs);
//     }
//     search =()=>{
//         console.log(this.inp.value);
//     }
//     render() {
//         return ( 
//             <div>
//                 <input ref={(inp)=>this.inp = inp} type="text"/>
//                 <button onClick={this.search}>查询</button>
//             </div>
//         )
//     }
// }

