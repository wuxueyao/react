import React, { Component } from 'react'
import {NavBar} from 'antd-mobile'

export default class AppMine extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff'}}
                rightContent={[
                    <i className='iconfont icon-lingjian' style={{ marginRight: '16px' }}></i>
                ]}
                >我的
                </NavBar>
                
            </div>
        )
    }
}
