import React, { Component } from 'react'
import {NavBar,Carousel,Flex} from 'antd-mobile'
import '../css/home.css'
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}>
                    住吧家居
                </NavBar>
                <Carousel
                    autoplay
                    infinite
                    // dotStyle={}
                    // dotActiveStyle={}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {['http://img.zxzhijia.com/edpic/image/201809/20180920172801_14548.jpg','http://img3.imgtn.bdimg.com/it/u=1857820975,3847121016&fm=15&gp=0.jpg'].map(val => (
                        <a
                        key={val}
                        href="#"
                        style={{ display: 'inline-block', width: '100%' }}
                        >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                        </a>
                    ))}
                </Carousel>
                <div className='home_second'>
                    <Flex>
                        <Flex.Item className='second_inner'>
                            <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3883041502,3432635739&fm=26&gp=0.jpg
                            '/>
                            <div className='second_shadow'>热门品牌</div>
                        </Flex.Item>                                  
                        <Flex.Item className='second_inner' style={{paddingLeft:'0.5%',paddingRight:'0.5%'}}>
                            <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3413019133,1958901088&fm=26&gp=0.jpg'/>
                            <div className='second_shadow'>私人搭配师</div>
                        </Flex.Item>                                  
                        <Flex.Item className='second_inner'>
                            <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1496855297,3938352137&fm=26&gp=0.jpg'/>
                            <div className='second_shadow'>选购指南</div>
                        </Flex.Item>                                  
                    </Flex>
                </div>
                <div className='home_third'>
                    <p>热门推荐</p>
                    <div className='third_img'>
                        <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3465616590,3944547691&fm=26&gp=0.jpg'/>
                        <div className='third_shadow'>什么是英伦装修风格，英伦风家装，英伦风格装修效果图</div>
                    </div>
                </div>
            </div>
        )
    }
}
