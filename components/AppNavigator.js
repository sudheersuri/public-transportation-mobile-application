import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './HomeScreen.js';
import {ScheduleScreen} from './ScheduleScreen.js';
import {PaymentScreen} from './PaymentScreen.js';

const Stack = createStackNavigator();

export const AppNavigator = () =>  {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="schedule" component={ScheduleScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}