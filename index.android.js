/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AnimateList from './src/index'
export default class AnimateListDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:300,backgroundColor:'white'}}>
       <AnimateList>
         <View style={{height:50,width:200,backgroundColor:'red'}}/>
          <View style={{height:50,width:200,backgroundColor:'yellow'}}/>
           <View style={{height:50,width:200,backgroundColor:'blue'}}/>
            <View style={{height:50,width:200,backgroundColor:'green'}}/>
             <View style={{height:50,width:200,backgroundColor:'red'}}/>
              <View style={{height:50,width:200,backgroundColor:'yellow'}}/>
               <View style={{height:50,width:200,backgroundColor:'blue'}}/>
                 <View style={{height:50,width:200,backgroundColor:'red'}}/>
          <View style={{height:50,width:200,backgroundColor:'yellow'}}/>
           <View style={{height:50,width:200,backgroundColor:'blue'}}/>
            <View style={{height:50,width:200,backgroundColor:'green'}}/>
             <View style={{height:50,width:200,backgroundColor:'red'}}/>
              <View style={{height:50,width:200,backgroundColor:'yellow'}}/>
               <View style={{height:50,width:200,backgroundColor:'blue'}}/>
       </AnimateList>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AnimateListDemo', () => AnimateListDemo);
