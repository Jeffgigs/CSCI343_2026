import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../constants/colors';
import { LISTINGS } from '../data/dummy_data';
import List from "../components/List/List"

export default function BookmarksScreen() {
  const favoriteListingIds = useSelector((state) => state.favoriteListings.ids);

  const favoriteListings = LISTINGS.filter((listingItem) => {
    return favoriteListingIds.includes(listingItem.id);
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
