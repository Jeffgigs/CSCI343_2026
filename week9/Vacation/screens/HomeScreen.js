import { View, Text, FlatList} from 'react-native'
import StateGridTitle from "../components/StateGridTile"
import {STATES} from "../data/dummy-data";


export default function HomeScreen(props) {
    function renderStateItem(itemData) {
        function pressHandler() {
            props.navigation.navigate("VacationOverview", {
                stateID: itemData.item.id
            });
        }

        return (
            <StateGridTitle 
            name={itemData.item.name}
            color={itemData.item.color}
            onPress={pressHandler}            
            />
        );
    }



    return(
        <View>
            <FlatList
            data={STATES}
            keyExtractor={(item) => {
                return item.id;
            }}
            renderItem={renderStateItem}
            numColumns={2}
            />
        </View>
    )
}