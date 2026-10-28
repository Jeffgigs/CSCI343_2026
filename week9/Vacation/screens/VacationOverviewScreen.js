import { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native'
import { CAMPGROUNDS, STATES } from '../data/dummy-data';
import VacationItem from '../components/VacationItem';


export default function VacationOverviewScreen(props) {
    const stateID = props.route.params.stateID;

    useLayoutEffect(() => {
        const state = STATES.find((state) => state.id === stateID);
        props.navigation.setOptions({title: state ? state.name : null});
    },  [stateID, props.navigation]);

    const displayedCampgrounds = CAMPGROUNDS.filter((campgroundItem) => {
        return campgroundItem.stateId === stateID;
    }) 

    function renderCampgroundItem(itemData){
        const campgroundItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            numSites: itemData.item.numSites,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index
    };
        return <VacationItem {...campgroundItemProps}/>

    }
    return(
        <View style={styles.container}>
            <FlatList 
            data={displayedCampgrounds}
            keyExtractor={(item) => item.id}
            renderItem={renderCampgroundItem}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})