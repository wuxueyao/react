import React, { Component } from 'react'
import {NavBar,Icon,Tabs} from 'antd-mobile'
import '../css/idea.css'
import Ideadetail from './Ideadetail';
const tabs = [
    { title: '推荐', sub: '1' },
    { title: '冬季', sub: '2' },
    { title: '宜家', sub: '3' },
    { title: '小清新', sub: '4' },
    { title: '小户型', sub: '5' },
    { title: '个性色彩', sub: '6' },
  ];
export default class AppIdea extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff'}}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                ]}
                >灵感</NavBar>

                <div>
                    <Tabs tabs={tabs}
                    initialPage={0} //默认显示的界面
                    tabBarInactiveTextColor='#808080'
                    tabBarActiveTextColor='#3fcccb'
                    tabBarUnderlineStyle={{border:'1px solid #3fcccb'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{
                    paddingTop:'2%',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    }}>
                        <Ideadetail/>
                    </div>
                    <div style={{ display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#fff' 
                    }}>
                        <Ideadetail/>
                    </div>
                    <div style={{ display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#fff' 
                    }}>
                        <Ideadetail/>
                    </div>
                    <div style={{ display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#fff' }}>
                        <Ideadetail/>
                    </div>
                    <div style={{ display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#fff' }}>
                        <Ideadetail/>
                    </div>
                    <div style={{ display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#fff' }}>
                        <Ideadetail/>
                    </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
