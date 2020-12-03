import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './Screens/facebook';
import Instagram from './Screens/instagram';
import { SocialIcon } from 'react-native-elements'

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
        <AppContainer/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'orange'
  }
});

const TabNavigator = createBottomTabNavigator({
  Facebook: {
    screen: Facebook,
    navigationOptions:{  
          tabBarLabel:'Facebook',  
          tabBarIcon:({tintColor})=>(  
              <SocialIcon type='facebook' style={{marginBottom:50}} iconColor='white'/>
          ) ,
    },
  },

  Instagram:{
      
    screen : Instagram,
    navigationOptions:{  
          tabBarLabel:'Instagram',  
          tabBarIcon:({tintColor})=>(  
              <SocialIcon type='instagram' style={{marginBottom:50}} iconColor='yellow'/>
          )  
    }
  }
});

const AppContainer = createAppContainer(TabNavigator);
