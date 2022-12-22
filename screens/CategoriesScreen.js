import { CATEGORIES} from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({navigation}) {
    function renderCategoryItem({item}) {
        function pressHandler() {
            navigation.navigate("MealsOverview")
        }
        return (
            <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler} />
        )
    }
    return ( 
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} key="categories" />
     );
}

export default CategoriesScreen;