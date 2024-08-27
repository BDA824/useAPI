import { StyleSheet, Text, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';
import Header from './Header';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

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
    return <ActivityIndicator style={styles.load} size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            )}
            style={styles.flatList} // Estilo para el contenedor de FlatList
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '868686',
    alignContent: 'center',
    justifyContent: 'center'
  },
  load: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: '00000',
  },
});
