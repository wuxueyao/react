import React,{Component,Fragment} from 'react';
//类定义组件
//export default class…… 这样写可以一边定义一边导出
class ShowTime extends React.Component{//第一行{}引入了组件名，这里可以直接写名
    constructor(props){
        super(props);//将父类的this传给子类，必须有
        this.state={
            time:new Date().toLocaleString()
        }
        //通过bind绑定this
        this.handleClick = this.handleClick.bind(this);
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1);
            this.setState({
                time: new Date().toLocaleDateString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');
    }
    
    //虽然是一个函数，但在类里，是类的一个方法，不需要写function
    handleClick = (id,e)=>{
        console.log(this);
        console.log('点击成功');
    }
    divClick = (num,e)=>{
        console.log(num,e);
        console.log('时樾哥哥呀！');
    }
    // handleClick(){
    //     console.log(this);
    //     console.log('点击成功');
    // }

    render(){
        console.log('render');

        return (//只能返回一个标签，如果要很多就得在外边包一个
            <Fragment>
                {/* 外层如果用div标签的话，就会在页面中有多余结构，这样不会有 */}

                {/* <div onClick={this.handleClick}>{this.state.time}</div> */}
                
                {/* 1是实参，ev是事件对象 */}
                <div onClick={(ev)=>this.handleClick(1,ev)}>{this.state.time}</div>

                {/* 也可以不用提前声明，直接写个箭头函数 */}
                {/* <div onClick={()=>{console.log(1);}}>{this.state.time}</div> */}
                
                {/* <div>hello{this.props.word}</div> */}
                <div onClick={this.divClick.bind(this,333)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}

/*-------导出类---------*/

//默认导出，默认导出引用的时候可以自己起名字
//export default ShowTime;

//命名导出，可写多个export
export {ShowTime}; //可以把多个类依次导出，放进去逗号隔开

//被调用的组件是子组件