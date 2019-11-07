import React, { Component } from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Home from './container/Home';
import Login from './container/Login';
import './index.css'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className='content'>
                            <div>
                                {/* <Route path='/:id' component={TList} ></Route> */}
                                <Route path='/home' component={Home}/>
                                <Route path='/api' component={Api}/>
                                <Route path='/start' component={Start}/>
                                <Route path='/about' component={About}/>
                                <Route path='/login' component={Login}/>
                            </div >
                        </div>
                        <div className='sider'>
                            <div className="white one">
                                <p style={{fontSize:"14px"}}>Cnode: Node.js专业中文社区</p>
                                <p>您可以 <span>登录</span> 或 <span>注册</span> ，也可以</p>
                                <li>通过 GitHub 登录</li>
                            </div>
                            <div className="white two">
                                <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt="sider1" width="270"height="65"/>
                                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="sider2" width="270" height="65"/>
                                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="sider3" width="270" height="65"/>
                            </div>
                            <div className="white three">
                                <div className="white_header">无人回复的话题</div>
                                <div className="white_inner">
                                    <ol>
                                        <li>Hackers周刊第十期 （2019-11-03）</li>
                                        <li>写了个在测试中，控制函数日志打印的np...</li>
                                        <li>libuv的定时器原理源码解析</li>
                                        <li>nodejs之setTimeout源码解析</li>
                                        <li>libuv之async.c源码解析</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="white three">
                                <div className="white_header">积分榜 TOP 100 >></div>
                                <div className="white_inner">
                                    <ol>
                                        <li><span>21745</span>  i5ting</li>
                                        <li><span>15675</span>  alsotang</li>
                                        <li><span>9350</span>  leapon</li>
                                        <li><span>9105</span>  atian25</li>
                                        <li><span>8780</span>  yiyinyiyong</li>
                                        <li><span>7335</span>  yakczh</li>
                                        <li><span>6825</span>  im-here</li>
                                        <li><span>6095</span>  DevinXian</li>
                                        <li><span>5815</span>  chapgaga</li>
                                        <li><span>5350</span>  magicdawn</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="white three">
                                <div className="white_header">友情社区</div>
                                <div className="white_inner">
                                    <ol>
                                        <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="sider5" width="150"/>
                                        <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt="sider6" width="150"/>
                                        <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt="sider7" width="150"/>
                                        <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="sider8" width="150"/>    
                                    </ol>
                                </div>
                            </div>
                            <div className="white three">
                                <div className="white_header">客户端二维码</div>
                                <div className="white_code">
                                    <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="code" width="200"/>
                                    <p>客户端源码地址</p>                                          
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer_content">
                            <ol>RSS | 源码地址
                                <li>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</li>
                                <li>服务器赞助商为<img src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" width="92" height="18.4"></img>，存储赞助商为<img src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" width="115" height="43.7"></img>，由 <img src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" width="166" height="54"></img> 提供应用性能服务。</li>
                                <li>新手搭建 Node.js 服务器，推荐使用无需备案的 <a>DigitalOcean(https://www.digitalocean.com/)</a></li>
                            </ol>  
                        </div>
                    </div>      
                </div>
            </Router>
        )
    }
}
