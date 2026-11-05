import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LISTINGS } from '../data/dummy_data';
import Colors from '../constants/colors';
import BookmarkButton from '../components/BookmarkButton';
import { FavoritesContext } from '../store/context/favorites-context';

export default function ListingDetailScreen(props) {
  const favoriteListingsCtx = useContext(FavoritesContext);
    const listingId = props.route.params.listingId;
    const selectedListing = LISTINGS.find((listing) => listing.id === listingId);

    const listingIsFavorite = favoriteListingsCtx.ids.includes(listingId);

    function changeFavoriteStatusHandler(){
      if (listingIsFavorite){
        favoriteListingsCtx.removeFavorite(listingId);
      } else {
        favoriteListingsCtx.addFavorite(listingId);
      }


    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: "",
            headerRight: () => {
                return (
                    <BookmarkButton
                    isFavorite={listingIsFavorite}
                    onPress={changeFavoriteStatusHandler}
                    />
                )
            }
        })

    }, [props.navigation, changeFavoriteStatusHandler]);
  return (
    <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
            <Image 
            style={styles.image}
            source={{ uri: selectedListing?.imageUrl }}  
            />
        </View>

        <View style={styles.contentContainer}>
            <Text style={styles.agency}>{selectedListing?.agency?.toUpperCase()}</Text>
            <Text style={styles.date}>{selectedListing?.date} By{selectedListing?.author}</Text>
            <Text style={styles.headline}>{selectedListing?.headline}, </Text>
            <Text style={styles.description}>{selectedListing?.description}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    marginVertical: 10,
    height: "100%",
    resizeMode: "center",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundImage: Colors.primary500o5,
    flex: 1,
    alignItems: "center"
  },
  agency: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfairBold",
    paddingBottom: 5
  },
  headline: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5
  },
  metadata: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    fontSize: 15,
    fontFamily: "playfair",
    marginBottom: 30
  },

});
