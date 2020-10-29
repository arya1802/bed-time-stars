import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        ToastAndroid.show('Your story has been sumitted', ToastAndroid.SHORT)
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header
                    backgroundColor = {'#27ae60'}
                    centerComponent = {{
                        text : 'Bed Time Stars',
                        style : { color: '#badc58', fontSize: 20}
                    }}
                />
                <TextInput

                    placeholder="Story Title"
                    placeholderTextColor = "#27ae60"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Author"
                    placeholderTextColor = "#27ae60"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput
                    placeholder="Write your story"
                    placeholderTextColor = "#27ae60"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#badc58',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      padding: 10,
      margin:10,
      borderColor:"#27ae60"
  },
  author: {
      height: 40,
      borderWidth: 2,
      padding: 10,
      margin:10,
      borderColor:"#27ae60"
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      padding:10,
      borderColor:"#27ae60"
    
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#27ae60',
       
      width: 80,
      height: 40
  },
  buttonText: {
      textAlign: 'center',
      color: '#badc58',
      fontWeight: 'bold'
  }
});
