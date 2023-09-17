import { Text,View,StyleSheet,ScrollView } from "react-native";

const VidSeventeen = () => {
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
        {
            id: 16,
            name : "Awaiz"
        },
        {
            id: 17,
            name : "Awaiz"
        },
        {
            id: 18,
            name : "Awaiz"
        },
        {
            id: 19,
            name : "Awaiz"
        },
        {
            id: 20,
            name : "Awaiz"
        },
    ]
    return(
        <View>
            <Text style={styles.heading}>Grid with Dynamic Data</Text>
            <ScrollView>
            <View style={styles.parentContainer}>
                {users.map((item) => <Text style={styles.flexItem} key={item.id}>{item.name}</Text>)}
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        textAlign:'center'
    },
    parentContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        // justifyContent:'center',
        // alignItems:'center'
    },
    flexItem:{
        fontSize:25,
        backgroundColor:'lightblue',
        color:'#fff',
        margin:5,
        padding:5,
        width:120,
        height:120,
        textAlign:'center',
        textAlignVertical:'center'
    }
})
export default VidSeventeen;