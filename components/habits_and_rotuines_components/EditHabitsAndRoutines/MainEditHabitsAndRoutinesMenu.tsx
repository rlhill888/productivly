import React from 'react';
import { View, Text, SafeAreaView, Button} from 'react-native';
import { Title } from 'react-native-paper';

interface MainEditHabitsAndRoutinesMenuProps
{
    navigation: any;
}

export default function MainEditHabitsAndRoutinesMenu({
    navigation
}:MainEditHabitsAndRoutinesMenuProps){

    return (
        <View>
            <Button 
            onPress={()=> navigation.navigate('Create a new habit')}
            title='Create Habit'></Button>
            <Button 
            onPress={()=> navigation.navigate('Create a new routine')}
            title='Create Routine'/>
            <Text>List of routines with play buttons go here</Text>

        </View>
    )

}