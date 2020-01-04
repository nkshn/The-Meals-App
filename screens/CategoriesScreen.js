import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>This is 'CategoriesScreen.js'</Text>
      <Button
        title="NEXT: Meals of Category"
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  }
});

export default CategoriesScreen;
