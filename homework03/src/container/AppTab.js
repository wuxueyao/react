import { TabBar } from 'antd-mobile';
import React from 'react'
import AppHome from './AppHome';
import AppIdea from './AppIdea';
import APPMall from './APPMall';
import AppMine from './AppMine';
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  render() {
    return (
        <div style={{ 
          position: 'fixed', 
          height: '100%', 
          width: '100%', 
          top: 0 
        }}>
        <TabBar
          unselectedTintColor="#808080"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={
            <i
              className='iconfont icon-shouye'
            />
            }
            selectedIcon={
            <i
              className='iconfont icon-shouye'
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            //badge={1}//消息显示
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>

          <TabBar.Item
            icon={
            <i
              className='iconfont icon-linggan-copy'
            />
            }
            selectedIcon={
            <i
              className='iconfont icon-linggan-copy'
            />
            }
            title="灵感"
            key="idea"
            //badge={'new'}//消息提示显示new
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            <AppIdea/>
          </TabBar.Item>

          <TabBar.Item
            icon={
            <i
              className='iconfont icon-shangcheng-copy'
            />
            }
            selectedIcon={
            <i
              className='iconfont icon-shangcheng-copy'
            />
            }
            title="商城"
            key="mall"
            //dot //小红点
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <APPMall/>
          </TabBar.Item>

          <TabBar.Item
            icon={
            <i
              className='iconfont icon-gerenzhongxin'
            />
            }
            selectedIcon={
            <i
              className='iconfont icon-gerenzhongxin'
            />
            }
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <AppMine/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
