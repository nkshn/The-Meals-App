import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import TouchableComponent from '../components/TouchableComponent';

const CategoriesGridTile = props => {
  return (
    <View style={styles.gridItem}>
      <TouchableComponent
        activeOpacity={0.7}
        style={{ flex: 1 }}
        onPress={props.onSelectCategory}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 13,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5
  },
  container: {
    flex: 1,
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    letterSpacing: 2,
    fontFamily: 'lato-regular',
    textTransform: 'capitalize',
    textAlign: 'right'
  }
});

export default CategoriesGridTile;