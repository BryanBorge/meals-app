import React from "react";
import { View, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navData => {
  const catId = navData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
