import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title';
import MenuItem from '../components/MenuItem';

export default function MenuScreen() {
    // Setting Safe Area Screen Boundaries  
    const insets = useSafeAreaInsets();

    const [menuItems, setMenuItems] = useSate ([
        {
            name: "big Mac",
            image: require("../assets/images/mcchicken.jpg"),
            price: "$8.50",
            id: 1,
        },
        {
            name: "Filet-O-Fish",
            image: require("../assets/images/fish.jpeg"),
            price: "$3.50",
            id: 2,
        },
        {
            name: "McChicken",
            image: require("../assets/images/mcchicken.jpg"),
            price: "$4",
            id: 3,
        },
        {
            name: "French Fries",
            image: require("../assets/images/fries.jpeg"),
            price: "$1.23",
            id: 4,
        },
        {
            name: "Quarter Pounder",
            image: require("../assets/images/quarter.jpg"),
            price: "$6.20",
            id: 5,
        },
    ])

  return (<View
  style={[
    styles.rootContainer,
    {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    },
  ]}
>
    <View style={styles.titleContainer}>
        <Title> Menu </Title>
    </View>

    <View>
        <FlatList
        data={menuItems}
        keyExtractor={(item, index) => {
            return item.id;

        }}
        alwaysBounceVertical={false}
        showVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return (
                <MenuItem
                name={itemdata.item.name}
                image={itemdata.item.image}
                price={itemdata.item.price}
                />

            )
        }}

     />
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
