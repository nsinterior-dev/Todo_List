import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
        {/* Today's Task */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Task</Text>

          <View style={styles.items}>
            {/* This is where the tasks will go */}
            <Task text={'Task 1'}/>
            <Task text={'Task 2'}/>
            <Task text={'Task 3'}/>   
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#1381a2',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  items:{
    marginTop: 30,
  },
});
