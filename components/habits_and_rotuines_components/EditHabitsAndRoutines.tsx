import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainEditHabitsAndRoutinesMenu from './EditHabitsAndRoutines/MainEditHabitsAndRoutinesMenu';
import CreateAHabit from './EditHabitsAndRoutines/CreateAHabit';
import CreateARoutine from './EditHabitsAndRoutines/CreateARoutine';


interface EditHabitsAndRoutinesProps
{
    
}

export default function EditHabitsAndRoutines({

}:EditHabitsAndRoutinesProps){

const Stack = createStackNavigator();


    return (
        <Stack.Navigator >
      <Stack.Screen name="Edit Your habits and Routines" component={MainEditHabitsAndRoutinesMenu} />
      <Stack.Screen name="Create a new habit" component={CreateAHabit} />
      <Stack.Screen name="Create a new routine" component={CreateARoutine} />

      
    </Stack.Navigator>
    )

}