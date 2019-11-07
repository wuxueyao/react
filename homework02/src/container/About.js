import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/start.css'
export default class Start extends Component {
    render() {
        return (
            <div>
                <div className='innerheader contentheader'>
                    <Link to={'/home'}>主页</Link>
                    <span>/ 关于</span>                  
                </div>
                <div className="start_inner">
                    <div className='start_title'>
                        <h2>关于</h2>
                    </div>
                    <div className='start_title'>
                        <h2>移动客户端</h2>
                        
                    </div>
                    <div className='start_title'>
                        <h2>友情链接</h2>
                    </div>
                    <div className='start_title'>
                        <h2>LOGO</h2>
                    </div>
                </div>
            </div>
        )
    }
}
