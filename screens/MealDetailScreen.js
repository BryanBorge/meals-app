import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailScreen;
