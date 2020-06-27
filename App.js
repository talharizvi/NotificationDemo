/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home';
import Detail from './src/screens/Detail/Detail';
import Profile from './src/screens/Profile/Profile';
import Icon from 'react-native-vector-icons/Entypo';

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen=({navigation})=>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleAlign:'center',
      headerLeft :()=> 
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Icon name="menu" size={35} color="#fff" style={{marginLeft:5}}/>
      </TouchableOpacity>
    }}/>
  </HomeStack.Navigator>
)

const DetailStackScreen=()=>(
  <DetailStack.Navigator>
    <DetailStack.Screen name="Detail" component={Detail} options={{
      title: 'Detail',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTitleAlign:'center',
      headerTintColor: '#fff',
    }}/>
  </DetailStack.Navigator>
)

const ProfileStackScreen=({navigation})=>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} options={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleAlign:'center',
      headerLeft :()=> 
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Icon name="menu" size={35} color="#fff" style={{marginLeft:5}}/>
      </TouchableOpacity>
    }}/>
  </ProfileStack.Navigator>
)

const TabsScreen = ()=>(
  <Tabs.Navigator tabBarOptions={{activeBackgroundColor: '#5c5a57', activeTintColor: '#f4511e',inactiveBackgroundColor:'#d5ded1',inactiveTintColor:'#050000'}}>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Detail" component={DetailStackScreen}/>
  </Tabs.Navigator>
)




const App = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator drawerContentOptions={{ activeBackgroundColor: '#f4511e', activeTintColor: '#ffffff',backgroundColor:'#5c5a57' }}>
        <Drawer.Screen name="Home  " component={TabsScreen}/>
        <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
      </Drawer.Navigator>

    </NavigationContainer>
  );
};



export default App;
