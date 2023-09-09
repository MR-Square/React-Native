import {View,Text} from 'react-native'

function VidEleven(props){
    return(
        <View style={{backgroundColor:'#f7cc54',margin:10,height:250,padding:10}}>
            <Text style={{marginTop:70,fontSize:20}}>Name: {props.name}</Text>
            <Text style={{fontSize:20}}>Age: {props.age}</Text>
            <Text style={{fontSize:20}}>Email: {props.email}</Text> 
        </View>
    )
}

export default VidEleven;