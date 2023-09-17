import {FlatList, StyleSheet, Text, View} from 'react-native';

const VidEighteen = () => {
  const users = [
    {
      id: 1,
      name: 'Mohd Raza',
      email: 'raza@gmail.com',
    },
    {
      id: 2,
      name: 'Zakki',
      email: 'zakki@gmail.com',
    },
    {
      id: 3,
      name: 'Asad',
      email: 'asad@gmail.com',
    },
    {
      id: 4,
      name: 'Awaiz',
      email: 'awaiz@gmail.com',
    },
    {
      id: 5,
      name: 'Kamil',
      email: 'kamil@gmail.com',
    },
    {
      id: 6,
      name: 'Munawwar',
      email: 'munna@gmail.com',
    },
    {
      id: 7,
      name: 'Afaque',
      email: 'afi@gmail.com',
    },
    {
      id: 8,
      name: 'Sameer',
      email: 'sammo@gmail.com',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 20}}>this is vid no 18.</Text>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <UserData item = {item} />
        )}
      />
    </View>
  );
};


// Making component (you can make your component in another file.)
const UserData = props => {
    // const item = props.item;
  return (
    <View style={styles.flexBox}>
      <Text style={styles.flexItem}>{props.item.name}</Text>
      <Text style={[styles.flexItem, {fontSize: 20}]}>{props.item.email}</Text>
    </View>
  );
};

// stying
const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'center',
  },
  flexBox: {
    flex: 1,
    flexDirection: 'row',
  },
  flexItem: {
    backgroundColor: 'lightblue',
    fontSize: 24,
    margin: 2,
    flex: 2,
  },
});

export default VidEighteen;
