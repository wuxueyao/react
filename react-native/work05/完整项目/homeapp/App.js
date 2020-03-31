/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  BackHandler,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';
import {
  Router, 
  Overlay, 
  Scene, 
  Tabs, 
  Lightbox, 
  Modal,
  Actions,
} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/AntDesign';
import List from './components/Tlists'
import Mine from './src/userinfor/Mine'
import Home from './components/Home'
import Form from './components/Form';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
console.disableYellowBox=true;
const App = () => {
	let now = 0;
	let [isInstall,setInstall] = useState(true);
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			if(!res){
				setInstall(false)
			}
		})
		AsyncStorage.getItem('isLogin')
		.then(res=>{
			if(res == 'false'){
				SplashScreen.hide();
                Actions.login();
			}else{
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(true)
	}
	if(!isInstall){
		return <View style={{flex:1}}>
			<SwiperPage 
				afterInstall={afterInstall}
			/>
		</View>
	}
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene == 'home'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}else{
					if(Actions.currentScene == 'login'){
						if(new Date().getTime()-now<2000){
							BackHandler.exitApp();
						}else{
							ToastAndroid.show('确定要退出吗',100);
							now = new Date().getTime();
							return true;
						}
					}
					Actions.pop();
					return true;
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Scene key="root">
						<Tabs 
							key='tabbar'
							hideNavBar
							activeTintColor="red"
							inactiveTintColor="#949494"
							tabBarStyle={{
								backgroundColor:'#fff',
								height:76*s
							}}
						>
							{/* 首页 */}
							<Scene key='home'
								title='首页'
								icon={
									({focused})=><Icon
										color={focused?'red':'#949494'} 
										name="home"
										size={25}
									/>
								}
							>
								<Scene key='h' hideNavBar={true} component={Home}/>
							</Scene>

							{/* 商品分类 */}
							<Scene key='list'
								title='商品分类'
								icon={
									({focused})=><Icon
										color={focused?'red':'#949494'} 
										name="appstore-o"
										size={25}
									/>
								}
								
							>
								<Scene key="lists" hideNavBar={true} component={List}/>
							</Scene>
							<Scene key='my'
								title='个人中心'
								icon={
									({focused})=><Icon
										color={focused?'red':'#949494'} 
										name="user"
										size={25}
									/>
								}
								
							>
								<Scene key="mine" hideNavBar={true} component={Mine}/>
								<Scene 
									key="form" 
									hideTabBar
									component={Form}
									hideNavBar={true}
								/>
							</Scene>
						</Tabs>
					</Scene>
				</Lightbox>
				<Scene key='login' component={Login}/>
				<Scene key='register' component={Register}/>
			</Modal>
			</Overlay>
		</Router>
	);
};

const styles = StyleSheet.create({
  title:{
    width:'100%',
    height:300,
    backgroundColor:'red'
  }
})

export default App;