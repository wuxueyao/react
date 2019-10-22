import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {ShowTime} from './ShowTime'; //如果引入的是js后缀名可以省略，别的不可以
import Todolist from './TodoList/Todolist';
import Request from './Request';
//这种写法是命名导出，默认导出不需要写{},只需要起个名字就行，但最好和那个类一样的名字

/*--------------------------1.自定义组件----------------------------- */
/**
 * 类定义组件(有生命周期函数)
 * 当只是渲染结构，没有js逻辑功能的时候
 */
// class Hello extends React.Component{//第一行{}引入了组件名，这里可以直接写名
//     constructor(props){
//         super(props);//将父类的this传给子类，必须有
//         this.state={
//             time:new Date().toLocaleString()
//         }
//         console.log('constructor',this.props.word);
//     }
//     componentDidMount(){
//         console.log('componentDidMount');
//         setTimeout(()=>{
//             console.log(1);
//             this.setState({
//                 time: new Date().toLocaleDateString()
//             })
//         },1000)
//     }
//     shouldComponentUpdate(){
//         return true;
//     }
//     getSnapshotBeforeUpdate(){
//         console.log('getsnapshot');
//     }
//     componentDidUpdate(){
//         console.log('didupdate');
//     }
//     render(){
//         console.log('render');

//         return (//只能返回一个标签，如果要很多就得在外边包一个
//             <Fragment>
//                 {/* 外层如果用div标签的话，就会在页面中有多余结构，这样不会有 */}
//                 <div>{this.state.time}</div>
//                 <div>hello{this.props.word}</div>
//             </Fragment>
//         );
//     }
// }

/**
 * 组件交互
 * 父组件--->子组件：调用时在子组件上添加属性
 * 在子组件中通过props获取数据
 */

 //这里要和你要展示的js文件对应
ReactDOM.render(<Request word="react"/>,document.getElementById("root"));
//绿色的写什么，页面就会显示什么

/**
 * 函数定义组件(无生命周期函数)
 * 当只是渲染结构时：
 */
// function Todo(props){
//     return(
//         <div>
//             {/*条件渲染*/}
//             {/*1. if else */}
//             {props.list.length>=5?<h1>todo</h1>:''}

//             {/*2. if */}
//             {props.list.length>=5&&<h1>todo</h1>}
//             <ul>
//                 {/*循环渲染*/}
//                 {
//                     //函数可以写成箭头函数
//                     props.list.map(function(item,index){
//                         if(index%2 === 0){
//                             return <li key={item}>{item}</li>
//                         }
//                     })

//                     /**箭头函数和条件语句
//                      * props.list.map(
//                      *   (item,index)=> index%2===0 && <li key={item}>{item}</li>
//                      *)
//                      */
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));




/**
 * react元素创建后不可改变
 */
// function tick(){
//     var e = <div>
//         <p>当前时间</p>
//         <p>当前时间</p>
//         <h1>{new Date().toLocaleDateString()}</h1>
//     </div>;
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();
// setInterval(tick,1000);

//jsx表达式会被react转成一个对象，类似下面声明的obj对象
var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello',
    React.createElement(
        'h1',
        {'id':'h'},
        'react'
    )
);
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: ['hello',{
            type: 'h1',
            props: {
                id: 'h',
                class: 'h',
                children: ['react']
            }
        }]
    }
}


/**
 * 自己声明render函数，实现页面渲染
 */
function render(obj,container){
    var {type,props} = obj;
    // 文档碎片（可以把所有要添加的节点先放在这里，然后一起添加）
    var fr = document.createDocumentFragment();

    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i] === 'object'){
                    render(props[item][i],ele);
                }else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }


    fr.appendChild(ele);
    container.appendChild(fr);
}
render(obj,document.getElementById('root'));
// render(obj,document.getElementById('root'));

//var e = <h1>hello</h1>
// ReactDOM.render(ele,document.getElementById('root'));

/*---------------------2.性能问题及优化方法-------------- */

/**01.
 * 加载html文件、浏览器解析html生成DOM树
 * link加载css文件、解析css规则、和DOM树结合生成render tree（渲染树）、
 * 浏览器渲染引擎渲染render tree
 */

/**02.
 * 页面回流（重排）：内容改变、大小改变、结构改变
 * 页面重绘：把字体颜色、背景颜色等样式改变
 * 
 * 但是display、width、height、font-size这些，每次改变都会进行重排，
 * 所以最好声明一个css类，每次要改这些样式的时候，就加个类名，这样如果同时
 * 改这四个样式的时候，页面只会回流一次，如果通过元素获取来改变的话，
 * 四个样式就会回流四次。
 * 
 * 除了上边，还有node.offsetLeft、nodesetWidth 等，这些每次在获取的时候
 * 也会引起页面回流，以便获取最新的内容。这些都要慎用。
 */

// document.body.style.width = '100px';
// document.body.style.height = '100px';
//.change{
//     width: 100px;
//     height: 100px;
// }
// document.body.className = 'change';

// var root = document.getElementById('root');
// var width = root.offsetWidth; //*这样不会造成多余的页面回流
// setInterval(function(){
//     width += 1; //*
//     root.style.width = width +'px'; //*

//     //root.style.width = root.offsetWidth + 1 +'px';
//     //这里页面每次获取都要回流，但是赋值肯定是会回流的
// },100)


 /**03.
  * 文档碎片就相当于是下边这样的，先把要增加的都放一起
  * var str = '<h1>hello</h1>'+'';
  * ele.innerHTML = str;
  */

/**04.
 * 对节点的操作先用变量代替
 */
// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;
// console.timeEnd('a');