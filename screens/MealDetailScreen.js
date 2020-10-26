import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummyData";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='GO BACK TO CATEGORIES'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <Button
        title='GO BACK'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = navData => {
  const mealId = navData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return { headerTitle: selectedMeal.title };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailScreen;
