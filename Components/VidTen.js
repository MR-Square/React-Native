import {View,Text, Button} from 'react-native';
import React,{useState} from 'react';

const VidTen = () => {

    const  [count,setCount] = useState(0);

    function incCount(){
        setCount(prevVal => prevVal+1);
    }

    function decCount(){
        setCount(prevVal => prevVal-1)
    }

    function setDefault(){
        setCount(0)
    }

    return(
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:60,textAlign:'center',marginTop:250,marginBottom:50}}>{count}</Text>
            <Button title='Increase Value' color={'green'} onPress={incCount}></Button>
            <Text style={{marginTop:50}}/>
            <Button title='Decrease Value' color={'red'} onPress={decCount}/>
            <Text style={{marginTop:50}}/>
            <Button title='Set Default Value' onPress={setDefault}/>
        </View>
    )
}

export default VidTen;