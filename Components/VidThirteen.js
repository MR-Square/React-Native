import React,{useState} from 'react'
import {Text,StyleSheet,View, TextInput, Button} from 'react-native'

function VidThirteen(){

    const [name,setName] = useState("");
    return(
        <View>
            <Text style={styles.heading}>Handling Text Input</Text>
            <TextInput
                placeholder='Enter your name here'
                onChangeText={(text) => setName(text)}
                value={name}
                style = {styles.inputField}
            />
            <Button
                title='Clear input area'
                onPress={() => setName("")}
            />
            <Text style = {styles.heading}>Your name is : </Text>
            <Text style={styles.textBox}>{name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        textAlign:'center',
        padding:10,
        margin:4
    },
    inputField:{
        fontSize:20,
        borderWidth:1,
        borderColor:'blue',
        margin:10,
        padding:5,
    },
    textBox:{
        fontSize:30,
        marginTop:20,
        padding:10,
        textAlign:'center',
        textAlignVertical:'center',
    }
})

export default VidThirteen;