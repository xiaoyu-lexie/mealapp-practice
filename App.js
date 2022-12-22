import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverViewScreen from './screens/MealOverviewScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="black" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
