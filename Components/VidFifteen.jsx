import {FlatList, Text,View,StyleSheet} from 'react-native'

function VidFiteen() {
    const users = [
        {
            id: 1,
            name : "Mohd Raza"
        },
        {
            id: 2,
            name : "Zakki"
        },
        {
            id: 3,
            name : "Asad"
        },
        {
            id: 4,
            name : "Awaiz"
        },
    ]
    return(
        <View>
            <Text style={styles.heading}>hellow</Text>
            <FlatList
                data={users}
                renderItem={({item}) => <Text style={styles.listItem}>{item.name}</Text>}
                keyExtractor={item => item.id}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        textAlign:'center'
    },
    listItem:{
        fontSize:24,
        padding:10,
        backgroundColor:'lightblue',
        margin:10,
        borderRadius:5
    }
})
export default VidFiteen;