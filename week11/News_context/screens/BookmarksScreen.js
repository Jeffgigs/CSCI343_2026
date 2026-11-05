import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FavoritesContext} from "../store/context/favorites-context";
import { LISTINGS } from "../data/dummy_data"
import List from "../components/List/List"
import Colors from '../constants/colors';

export default function BookmarksScreen() {
  const favoriteListingsCtx = useContext(FavoritesContext)
  const favoriteListings = LISTINGS.filter((listingItem) => {
    return favoriteListingsCtx.ids.includes(listingItem.id);
  });

  if (favoriteListings.length === 0){
    return (
      <View style={styles.container}>
        <Text styles={styles.text}>You have no saved news yet</Text>
      </View>
    );
  } else {
    return <List items={favoriteListings}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
});
