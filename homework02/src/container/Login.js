import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/login.css'
import '../css/home.css'


export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='innerheader contentheader'>
                    <Link to={'/home'}>主页</Link>
                    <span>/ 登录</span>
                </div>
                <div className="login_inner">
                    <form>
                        <label for="name">用户名</label>
                        <input class="inp" id="name" name="name" size="30" type="text"/>
                        <br/>
                        <label for="pwd">密码</label>
                        <input class="inp" id="pwd name="pwd size="30" type="password"/>
                        <br/>
                        <Link to={'/home'}>登录</Link>
                    </form>
                </div>
            </div>
        )
    }
}
