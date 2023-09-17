import React, { useState } from 'react';
import {Text,StyleSheet,View, TextInput, Button} from 'react-native'

function MyForm(){
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNo:"",
        city:"",
        message:"",
    })
    
    return(
        <View style={{margin:10,padding:15,borderWidth:1,borderColor:'black',top:'20%'}}>
            <Text style={styles.formHeadings}>FIRST NAME</Text>  
            <TextInput
                style={styles.inputText}
                placeholder='FIRST NAME'
            />
            <Text style={styles.formHeadings}>LAST NAME</Text>
            <TextInput
                style={styles.inputText}
                placeholder='LAST NAME'
                name = {formData.city}
            />
            <Text style={styles.formHeadings}>EMAIL</Text>
            <TextInput
                style={styles.inputText}
                placeholder='EMAIL'
                name = {formData.city}
            />
            <Text style={styles.formHeadings}>PHONE NO</Text>
            <TextInput
                style={styles.inputText}
                placeholder='PHONE NO'
                name = {formData.city}
            />
            <Text style={styles.formHeadings}>CITY</Text>
            <TextInput
                style={styles.inputText}
                placeholder='CITY'
                name = {formData.city}
            />
            <Text style={styles.formHeadings}>MESSAGE</Text>
            <TextInput
                style={styles.inputText}
                placeholder='MESSAGE'
                name = {formData.city}
            />
            <View style={{marginTop:20}}>
                <Button
                    title='Send'
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    formHeadings:{
        fontSize:20,
        marginBottom:2,
        color:'lightblue',
    },
    inputText:{
        // fontSize:15,
        borderWidth:1,
        borderColor:'gray',
        // width:'90%',
        height:35,
        // padding:1,
        // paddingRight:10
        // paddingTop:6,
        marginBottom:10,
        textAlignVertical:'center'
    }
})
export default MyForm;