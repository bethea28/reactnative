import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';

const ButtonTop = (props) => {
        // <Text style = {{height: -30, borderColor: 'red', borderWidth: 2, fontSize: 20, top: 10, textAlign: "center"}}> {props.webster} 
        // </Text>

        console.log('test', props.webster)

  return (
    <View style ={styles.main}>  
    
        {/*Rendering of buttons */}
      <View >
        <View style = {{ flexDirection: "row", justifyContent: 'center'}}>
          <TouchableHighlight>
            <View style = {styles.webster}>
              <Button  onPress = {props.handleWebster} title = 'Webster'/>  
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style = {styles.urban}>
             <Button  onPress = {props.handleUrban} title = 'Urban'/>  
            </View>
          </TouchableHighlight>
        </View>

        <View style = {{ flexDirection: "row", justifyContent: 'center'}}>

          <TouchableHighlight>
            <View style = {styles.syllables}>
             <Button  onPress = {props.handleSyllables} title = 'Syllables'/>  
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style = {styles.thesaurus}>
             <Button  onPress = {props.handleSyn} title = 'Thesaurus'/>  
            </View> 
          </TouchableHighlight>
        </View>


        <View style = {{ flexDirection: "row", justifyContent: 'center'}}>

          <TouchableHighlight>
            <View style = {styles.rhyming}>
             <Button  onPress = {props.handleRhymes} title = 'Rhyming'/>  
            </View>
          </TouchableHighlight>
       

          <TouchableHighlight>
            <View style = {styles.pics}>
             <Button  onPress = {props.pics} title = 'Picture'/>  
            </View>
          </TouchableHighlight>

        </View>

      </View>
        
        {/*Rendering of dictionary results */}
      <View>  
        <Text style = {{height: -30,  fontSize: 20, top: 10, textAlign: "center"}}> {props.webster} 
        </Text>   
        <Text style = {{height: -30, fontSize: 20, top: 10, textAlign: "center"}}> {props.urban} 
        </Text>

        <Text style = {{ height: -30, fontSize: 20, top: 10, textAlign: "center"}}> {props.syllables} 
        </Text>
        <Text style = {{height: -30, fontSize: 20, top: 10, textAlign: "center"}}> 
           {props.syn} 

        </Text>
       
        <Text style = {{ height: -30, fontSize: 20, top: 10, textAlign: "center"}}> {props.rhymes} 
        </Text>
      </View>
          
        
    </View>
  );
    
}


const styles = StyleSheet.create({
  main: {
    // display: 'block',
    position: "relative",
    top: -25
    // flex: 1,
    // flexDirection: "row",
    // // justifyContent: 'center'
    // alignItems: 'center'
    // // height: 50,
    // backgroundColor: 'purple',
  },  
  webster: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 50,
    backgroundColor: 'yellow'
  },
  urban: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
    height: 50,
    backgroundColor: 'pink',
  },
  thesaurus: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
    height: 50,
    backgroundColor: 'lightblue',
  },
  syllables: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
    height: 50,
    backgroundColor: 'lightgreen',
  }, 

  rhyming: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
    height: 50,
    backgroundColor: 'green',
  }, 

  pics: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
    height: 50,
    backgroundColor: 'purple',
  }
});

export default ButtonTop