import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Facebook extends React.Component {
    render(){
        return(
          <View>
          <View style={{marginBottom:150, marginTop:20}}>
              <Text style ={styles.text}>Buzz App</Text>
          </View>
            <View style = {styles.container}>
             <Image source={require('../assets/facebook.png')} style={{width:100, height:100}}/>
                <Text style = {{fontSize:30, fontWeight:'bold', color:'blue'}}>Facebook</Text>
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
    backgroundColor:'blue',
    color:'white',
    width:'100%',
    fontSize:30,
    fontWeight:'bold',
    alignSelf:'center',
    justifyContent:'center',
    textAlign:'center'
  }
})