import {Text,StyleSheet,ScrollView,View} from 'react-native'

const VidSixteen = () => {
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
        {
            id: 5,
            name : "Mohd Raza"
        },
        {
            id: 6,
            name : "Zakki"
        },
        {
            id: 7,
            name : "Asad"
        },
        {
            id: 8,
            name : "Awaiz"
        },
        {
            id: 9,
            name : "Mohd Raza"
        },
        {
            id: 10,
            name : "Zakki"
        },
        {
            id: 11,
            name : "Asad"
        },
        {
            id: 12,
            name : "Awaiz"
        },
        {
            id: 13,
            name : "Zakki"
        },
        {
            id: 14,
            name : "Asad"
        },
        {
            id: 15,
            name : "Awaiz"
        },
    ]
    return(
        <View>
            <Text style={styles.heading}>List with map</Text>
            <ScrollView>
                {
                    users.map((item) => <Text style={styles.listItem} key={item.id}>{item.name}</Text>)
                }
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        textAlign:'center',
    },
    listItem:{
        fontSize:24,
        padding:10,
        backgroundColor:'lightblue',
        margin:10,
        borderRadius:5
    }
})

export default VidSixteen;