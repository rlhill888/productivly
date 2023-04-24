import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TestComp from "../components/TestComp";
import TestComp2 from "../components/TestComp2";
import EditHabitsAndRoutines from '../components/habits_and_rotuines_components/EditHabitsAndRoutines';
import CompleteARoutine from '../components/habits_and_rotuines_components/CompleteARoutine';




interface HabitsAndRoutinesMenuProps
{
    
}

export default function HabitsAndRoutinesMenu({

}:HabitsAndRoutinesMenuProps){
    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>

    
        <SafeAreaView style={{flex: 1}}>
            <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Edit Habits and Routines" component={EditHabitsAndRoutines} />
      <Tab.Screen  name="Complete a Routine" component={CompleteARoutine} />

      <Tab.Screen name="Analytics" component={TestComp} />
   
      
    </Tab.Navigator>

        </SafeAreaView>
        </View>
        
    )

}