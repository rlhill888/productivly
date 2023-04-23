import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DailyTasksMenu from '../screens/DailyTasksMenu';
import HabitsAndRoutinesMenu from '../screens/HabitsAndRoutinesMenu';
import PlanningMenu from '../screens/PlanningMenu';




export default function BottomNavigationTab() {
  
  function formatDate(date: Date) {
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    const month = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${month} ${day}`;
  }

  const date = new Date()
  const Tab = createMaterialBottomTabNavigator();
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Habits And Routines" component={HabitsAndRoutinesMenu} />

      <Tab.Screen name={` ${formatDate(date)} Tasks`} component={DailyTasksMenu} />

      <Tab.Screen name="Planning" component={PlanningMenu} />
    </Tab.Navigator>
  );
}