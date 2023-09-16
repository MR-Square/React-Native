import React, { useState } from 'react';
import {Button, StyleSheet,Text,TextInput,View} from 'react-native'

function VidFourteen(){
    // function changeData(){}
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [display,setDisplay] = useState(false)

    function clearForm(){
        setDisplay(false)
        setName("")
        setPassword("")
        setEmail("")
    }

    return(
        <View style={{margin:10}}>
            <Text style={{fontSize:30,textAlign:'center',margin:10}}>
                Simple Form in React Native
            </Text>
            <TextInput
                placeholder='Enter your name'
                style={styles.textInput}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                placeholder='Enter your password'
                style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry = {true}
            />
            <TextInput
                placeholder='Enter your email'
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <View style={{marginBottom:10}}>
                <Button
                    color={'green'}
                    title='Print Details'
                    onPress={()=> setDisplay(true)}
                />
            </View>
            <View style={{marginBottom:10}}>
                <Button
                    color={'red'}
                    title='Clear Details'
                    onPress={clearForm}
                />
            </View>

            {
                display?
                <View>
                    <Text>Username is : {name}</Text>
                    <Text>password is : {password}</Text>
                    <Text>email-id is : {email}</Text>
                </View>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        fontSize:18,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        marginTop:10,
        marginBottom:10
    }
})

export default VidFourteen;