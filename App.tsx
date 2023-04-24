import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigationTab from './components/BottomNavigationTab';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CompleteARoutineComp from './components/CompleteARoutineComp';

export default function App() {
  return (

    // <NavigationContainer>
    //   <BottomNavigationTab />
    // </NavigationContainer>
    <CompleteARoutineComp>

    </CompleteARoutineComp>

  );
}

const styles = StyleSheet.create({

});
