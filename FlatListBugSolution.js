/*
  FlatListBugSolution.js
*/
import React, { memo } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
));

const FlatListBugSolution = () => {
  const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Item item={item} />}
    />
  );
};

export default FlatListBugSolution;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

/*
  FlatListBug.js
*/
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

const FlatListBug = () => {
  const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
    />
  );
};

export default FlatListBug;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});