import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/start.css'
export default class Start extends Component {
    render() {
        return (
            <div>
                <div className='innerheader contentheader'>
                    <Link to={'/home'}>主页</Link>
                    <span>/ API</span>               
                </div>
                <div className="start_inner">
                    <div className='start_title'>
                        <h2>主题</h2>
                    </div>
                    <div className='start_title'>
                        <h2>主题收藏</h2>
                        
                    </div>
                    <div className='start_title'>
                        <h2>用户</h2>
                    </div>
                    <div className='start_title'>
                        <h2>消息通知</h2>
                    </div>
                    <div className='start_title'>
                        <h2>知识点</h2>
                    </div>
                </div>
            </div>
        )
    }
}
