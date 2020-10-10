import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class FB extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header backgroundColor={'aqua'} centerComponent={{text: 'Social Media App',style: { color: 'orange', fontSize: 20 , fontWeight:'bold'}}}/>
                <Text style={styles.Text}>Facebook</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'darkcyan'
    },
    Text: {
        fontSize:22,
        fontWeight:'bold',
        color:'lime',
        textAlign: 'center',
      },
})