import { View, Text } from 'react-native'
import React from 'react'

const List = ({route, navigation}) => {
    const {name, email} = route.params;
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold">Name: {JSON.stringify(name)}</Text>
      <Text className="text-xl font-bold">Email: {JSON.stringify(email)}</Text>
    </View>
  )
}

export default List