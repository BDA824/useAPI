import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const useAPI = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/broker/api/v1/managers/')
        console.log(response.data)
        setData(response.data)
        setLoading(false)
      }
      catch (error) {
        console.log(error)
      }
    }

    useAPI()
  }, []
  )

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>Nombre: {item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
