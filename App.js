import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShowScreen from './src/screens/ShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultScreen: ShowScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
})
export default createAppContainer(navigator);
 
