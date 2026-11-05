import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";


export default function HouseListingsScreen() {
    const type = "Lowcountry Tech Review";
    const displayedListings = LISTINGS.filter((listingItem) => {
        return listingItem.agency === type;
    })


  return <List items={displayedListings} />
    
}


