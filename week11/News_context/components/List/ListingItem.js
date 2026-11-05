import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, Pressable, Image } from "react-native"


export default function ListingItem(props){
    const navigation = useNavigation();

    function selectedListingHandler(){
        navigation.navigate("ListingDetail", {
            listingId: props.id,
        })
    }

    return (
        <View
        style={[
            styles.itemContainer,
            { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
        ]}
        >
            <Pressable onPress={selectedListingHandler}> 
                <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl}} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.agency}>{props.agency?.toUpperCase()}</Text>
                    <Text style={styles.headline}>{props.headline}</Text>
                    <Text style={styles.metadata}>By {props.author} {props.date}</Text>
                    <Text style={styles.description} numberOfLines={2}>{props.description}</Text>
                </View>

            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7,
    },
    imageContainer: {
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7,
        height: 160
    },
    image: {
        height: 200,
        resizeMode: "cover",
        borderRadius: 7,
    },
    infoContainer: {
        flex: 1,
        alignItems: "center",
    },
    agency: {
        fontSize: 25,
        fontFamily: "playfairBold",
        marginVertical: 4,
    },
    headline: {
        fontSize: 18,
        fontFamily: "playfair",
        paddingBottom: 5
    },
    metadata: {
        textAlign: "center",
        width: "100%",
        fontSize: 12,
        fontFamily: "playfair",
        marginBottom: 6,
    },
    description: {
        fontSize: 14
    }

})