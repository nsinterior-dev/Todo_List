import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        {/* Today's Task */}
        <View style={styles.taskWrapper}>
          <Text>Today's Task</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#1381a2',
  },
});
