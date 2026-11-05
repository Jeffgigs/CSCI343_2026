import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";


export default function WorldListingsScreen() {
    const type = "Palmetto Business Daily";
    const displayedListings = LISTINGS.filter((listingItem) => {
        return listingItem.agency === type;
    })


  return <List items={displayedListings} />
    
}


