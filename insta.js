import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class FB extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header backgroundColor={'darkcyan'} centerComponent={{text: 'Social Media App',style: { color: 'lime', fontSize: 20 , fontWeight:'bold'}}}/>
                <Text style={styles.Text}>Instagram</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'cyan'
    },
    Text: {
        fontSize:22,
        fontWeight:'bold',
        color:'orange',
        textAlign: 'center',
      },
})