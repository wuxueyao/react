import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/start.css'
export default class Start extends Component {
    
    render() {
        return (
            <div>
                <div className='innerheader contentheader'>
                    <Link to={'/home'}>主页</Link>
                    <span>/ Node.js 新手入门</span>               
                </div>
                <div className="start_inner">
                    <div className='start_title'>
                        <h2>Node.js入门</h2>
                    </div>
                    <div className='start_title'>
                        <h2>Node.js资源</h2>
                        
                    </div>
                    <div className='start_title'>
                        <h2>Node.js名人</h2>
                    </div>
                    <div className='start_title'>
                        <h2>Node.js服务器</h2>
                    </div>
                </div>
            </div>
            
        )
    }
}
