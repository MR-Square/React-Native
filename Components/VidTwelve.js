import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import externalStyle from '../styles/style'

function VidTwelve(){
    return(
        <View>
            {/* Example for inline css. */}
            <Text style={{fontSize:25,color:'red',textAlign:'center'}}>Inline Styling</Text>
            <Text style={{fontSize:25,color:'red',textAlign:'center'}}>Inline Styling</Text>

            {/* Example for internal css. */}
            <Text style={styles.textBox}>Internal Styling</Text>
            <Text style={styles.textBox}>Internal Styling</Text>
            <Text style={styles.textBox}>Internal Styling</Text>

            {/* Example for external css. */}
            <Text style={externalStyle.textBox}>External Styling</Text>
            <Text style={externalStyle.textBox}>External Styling</Text>
            <Text style={externalStyle.textBox}>External Styling</Text>
        </View>
    )
};

// For internal styling:
const styles = StyleSheet.create({
    textBox:{
        color:'black',
        fontSize:30,
        backgroundColor:'lightblue',
        margin:10,
        // marginLeft:'25%',
        padding:1,
        // width:'50%',
        height:100,
        textAlignVertical:'center',  // center the text w.r.t y-axis
        textAlign:'center', // center the text w.r.t x-axis
        borderWidth:2,
        borderRadius:10,
        borderColor:'red',
    }
})
{/*
* here styles is an object.
* StyleSheet.create takes an object(dict) as a parameter.
* textBox is a key which holds another object as a value.
*/}

export default VidTwelve;