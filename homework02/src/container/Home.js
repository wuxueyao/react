import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import HList from './HList';
import '../css/home.css'

export default class Home extends Component {
    render() {
        let url = this.props.match.url;
        return (
            <div>
                <div className="innerheader contentheader">
                    {/* url是直接获取当前的路径 */}
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/ask'}>问答</Link>
                    <Link to={url+'/job'}>招聘</Link>
                    <Link to={url+'/dev'}>客户端测试</Link>
                </div>
                <div>
                    {/* 路径可以用字符串拼接，也可以用模板字符串 */}
                    {/* <Route path={`${url}/all`} component={All}></Route> */} 
                    <Route exact path='/home/:id' component={HList} ></Route>
                    <Route path='/home/:id/:page' component={HList}></Route>
                </div>
            </div>
        )
    }
}
