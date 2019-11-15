import React, { Component } from 'react'
import {NavBar,Carousel,Grid,Flex, WhiteSpace } from 'antd-mobile'
import '../css/mall.css'
import a from '../images/1.png'
import b from '../images/2.png'
import c from '../images/3.png'
import d from '../images/4.png'
import e from '../images/5.png'
import f from '../images/6.png'
import g from '../images/7.png'
import h from '../images/8.png'
import i from '../images/9.png'
import j from '../images/10.png'
import cup from '../images/cup.png'
import clock from '../images/clock.png'
const inner2=[
    {from:a,name:'桌',color:'#fd3d78'},
    {from:b,name:'床',color:'#2ac2fd'},
    {from:c,name:'椅',color:'#fc9b1d'}, 
    {from:d,name:'几',color:'#30d3d2'},
    {from:e,name:'柜',color:'#fd3a38'},
    {from:f,name:'书架',color:'#5050f8'},
    {from:g,name:'沙发',color:'#aa12ff'},
    {from:h,name:'家居饰品',color:'#57de92'},   
    {from:i,name:'户外家具',color:'#928ac1'},
    {from:j,name:'全部分类',color:'#727177'}
]
const data = Array.from(inner2).map((_val) => ({
    icon: _val.from,
    text: _val.name,
    color: _val.color
}));
export default class APPMall extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff',position:'relative'}}
                rightContent={[
                    <i className='iconfont icon-one' style={{ marginRight: '16px' }}></i>
                ]}
                >商城
                    <div  className='mall_inp'>
                        <input results='s' type='search' placeholder='输入关键字搜索' />
                    </div>
                </NavBar>
                <Carousel
                    autoplay
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {['http://img.178hui.com/upload/2016/1026/09182782880.png','http://img2.imgtn.bdimg.com/it/u=1423777356,2349598526&fm=26&gp=0.jpg','https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=563202485,34924948&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=2327202394,4076923454&fm=26&gp=0.jpg'].map(val => (
                        <a
                        key={val}
                        href="#"
                        style={{ display: 'inline-block', width: '100%' }}
                        >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', height:"250px" }}
                        />
                        </a>
                    ))}
                </Carousel>
                <div className='mall_mini'>
                    <Grid data={data}
                    columnNum={5}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div>
                            <div className='grid_img' style={{ backgroundColor:dataItem.color}}>
                                <img src={dataItem.icon}  alt="" />
                            </div>
                            <div style={{ color: '#6c6c6c', fontSize: '3vw', marginTop: '1vw' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                    />
                </div>
                <div>
                    <WhiteSpace size='lg'/>
                    <div className='mall_third'>
                        <Flex>
                            <Flex.Item className='mall_room'>
                                <img src={cup}/>
                                <p className='mall_p1'>Top Art Studio 欧式风格精细…</p>
                                <p className='mall_p2'>￥ 39.95</p>
                            </Flex.Item>
                            <Flex.Item className='mall_room'>
                                <img src={clock}/>
                                <p className='mall_p1'>顺顺工艺欧式风格塑料外框黑…</p>
                                <p className='mall_p2'>￥ 83.99</p>
                            </Flex.Item>
                        </Flex>
                    </div>
                    <div className='mall_third'>
                        <Flex>
                            <Flex.Item className='mall_room'>
                                <img src={cup}/>
                                <p className='mall_p1'>Top Art Studio 欧式风格精细…</p>
                                <p className='mall_p2'>￥ 39.95</p>
                            </Flex.Item>
                        </Flex>
                    </div>
                </div>
                    
            </div>
        )
    }
}
