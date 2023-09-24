import {SectionList, StyleSheet, Text,View} from 'react-native'

const VidNinteen = () => {
    const users = [
        {
            id:1,
            name:'Raza',
            data:['React','React Native','Flutter']
        },
        {
            id:2,
            name:'Zakki',
            data:['React','React Native','C']
        },
        {
            id:3,
            name:'Asad',
            data:['Figma','Blender','Unity']
        },
        {
            id:4,
            name:'Awaiz',
            data:['React','React Native']
        },
    ]
    return(
        <View style={{margin:10,padding:15}}>
            <Text style={styles.heading}> Section List in RN</Text>
            <SectionList
            sections={users}
            renderItem={({item})=><Text>{item}</Text>}
            renderSectionHeader={({section:{name}})=><Text style={{marginTop:15}}>{name}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        textAlign:'center'
    }
})

export default VidNinteen;