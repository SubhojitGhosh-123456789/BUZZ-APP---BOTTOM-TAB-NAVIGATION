import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Instagram extends React.Component {
    render(){
        return(
          <View>
          <View style={{marginBottom:150, marginTop:20}}>
              <Text style ={styles.text}>Buzz App</Text>
          </View>
            <View style = {styles.container}>
            <Image source={require('../assets/instagram.png')} style={{width:100, height:100}}/>
                <Text style = {{fontSize:30, fontWeight:'bold', color:'gray'}}>Instagram</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center"
    },
  text:{
    backgroundColor:'yellow',
    width:'100%',
    fontSize:30,
    fontWeight:'bold',
    alignSelf:'center',
    justifyContent:'center',
    textAlign:'center'
  }
})