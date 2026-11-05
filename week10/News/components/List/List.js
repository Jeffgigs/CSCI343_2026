import { View, StyleSheet, FlatList } from "react-native";
import ListingItem from "./ListingItem";

export default function List(props){
    function renderListingItem(itemData){
        const listingItemProps = {
            id: itemData.item.id,
            headline: itemData.item.headline,
            date: itemData.item.date,
            author: itemData.item.author,
            agency: itemData.item.agency,
            description: itemData.item.description,
            imageUrl: itemData.item.imageUrl,
            listIndex: itemData.index,
            
        };
        return <ListingItem {...listingItemProps} />;

    }

    return(
        <View style={StyleSheet.container}>
            <FlatList
            data={props.items}
            keyExtractor={(item) => item.id}
            renderItem={renderListingItem}
            showVerticalScrollIndicator={false}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "black"
    }
})