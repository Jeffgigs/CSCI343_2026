import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { SafeAreaView, } from 'react-native';
import Movie from './componenets/Movie';

export default function App() {
  const [MovieItems, setMovieItems] = useState([
    {
      name: "Interstellar",
      image: require("./assets/images/Unknown.jpg"),
      rating: "9.5",
    },
    {
      name: "Inception",
      image: require("./assets/images/inception.jpg"),
      rating: "8.5",
    },
    {
      name: "Shutter Island",
      image: require("./assets/images/shutterisland.jpg"),
      rating: "8",
    },
    {
      name: "Obsession",
      image: require("./assets/images/obsession.jpg"),
      rating: "7.5",
    },
    {
      name: "The Great Gaspy",
      image: require("./assets/images/gaspy.jpg"),
      rating: "7",
    },
    {
      name: "Elf",
      image: require("./assets/images/elf.jpeg"),
      rating: "7.0",
    },
    {
      name: "Ted",
      image: require("./assets/images/ted.jpeg"),
      rating: "7.0",
    },
    {
      name: "whiplash",
      image: require("./assets/images/whiplash.jpg"),
      rating: "7.0",
    },
    {
      name: "Wolf of Wallstreet",
      image: require("./assets/images/wow.jpeg"),
      rating: "7.0",
    },
    {
      name: "Grownups",
      image: require("./assets/images/grownups.jpeg"),
      rating: "7.0",
    },
  ]);
  return (
    <>
    <StatusBar style='dark' />
    <SafeAreaView style={styles.rootContainer}>
      <View>
        <Text style={styles.title}>Top 5 Movies</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          data={MovieItems}
          keyExtractor={(item, index) => item.name} 
          renderItem={(itemData) => {
            return <Movie
            name={itemData.item.name}
            image={itemData.item.image}
            rating={itemData.item.rating}
            />

          }}
        
        
        
        
        />

      </View>

      
      
    </SafeAreaView>
    
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#95fb82ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer:  {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 50
  },

title:{
  fontSize: 35,
  fontWeight: "bold"
},

listContainer:{
  flex: 8,
  width: "90%"
}

});
