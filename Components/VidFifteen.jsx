import {FlatList, Text,View} from 'react-native'

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
            <Text>hellow</Text>
            <FlatList
                data={users}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default VidFiteen;