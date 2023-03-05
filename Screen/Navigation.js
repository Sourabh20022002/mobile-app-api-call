import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Onboard from './Onboard'
import Home from './Home'
import List from './List'


const Stack = createNativeStackNavigator()
const Navigation = () => {
    const globalScreenOptions = {
        headerStyle: {backgroundColor: "#ffffff"},
        headerTitleStyle: {color: "white"},
        headerTintColor: "white",
        headerShown: false
      }
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboard" screenOptions={globalScreenOptions}>
            <Stack.Screen name="Onboard" component={Onboard} />
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Group screenOptions={{presentation : "modal"}}  >
            <Stack.Screen name="Transfer" component={List} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation