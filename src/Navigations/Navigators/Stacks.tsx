import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../../Screens/LoginScreen';

const Stack = createStackNavigator();

const Stacks = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    {/* <Stack.Screen
      name="Home"
      component={DrawerMenu}
      options={{
        headerShown: false,
      }}
    /> */}
    {/* <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Accounts"
      component={Accounts}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Transactions"
      component={Transactions}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Stats"
      component={Stats}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Help"
      component={Help}
      options={{
        headerShown: false,
      }}
    /> */}
  </Stack.Navigator>
);

export default Stacks;
