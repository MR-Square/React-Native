import { View,Text, Button } from "react-native";

const VidNine = () => {
    // a function.
    const fruit = () => {
        console.warn("function is called");
    }

    const myName = (username) => {
        return(
            console.warn(username)
        )
    }

    return(
        <View>
            <Text style={{marginTop:100,textAlign:'center',fontSize:20}}>calling a function without parameter</Text>
            <Button title="Button" color={'black'} onPress={fruit}></Button>
            <Text style={{marginTop:100,textAlign:'center',fontSize:20}}>calling a function with parameter</Text>
            <Button title="Tell me my name" onPress={()=>myName('Mohd Raza ')}></Button>
        </View>
    )
}

export default VidNine;


{/*
In this video we saw
1. How to create a button.
2. How can we change the color of that button.
3. How to pass a function when button is pressed.
4. How can we pass a parameter with function on pressing a button.

*/}