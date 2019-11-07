import React from 'react';
import {Link,Route} from 'react-router-dom';
import Topic from '../container/Topic';

export default function Header(){


    //return 后边不能直接换行，如果想换行，需要用小括号把return的包起来
    return <div className="headerwrap">
        <header>
            <a style={{lineHeight:'40px'}}><img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo"/></a>
            <div style={{float:"right",lineHeight:'50px'}}>
                <Link to='/home'>首页</Link>
                <Link to='/start'>新手入门</Link>
                <Link to='/api'>API</Link>
                <Link to='/about'>关于</Link>
                <Link to='/'>注册</Link>
                <Link to='/login'>登录</Link>
            </div>
            <div>
                {/* <Route path='/:id' component={TList}></Route> */}
                <Route path='/topic/:author_id' component={Topic}></Route>

            </div>
        </header>

    </div>
}