import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyBottomTabs from './RootNavigator/Navigator'

const App = () => {
  return (
    <NavigationContainer>
      <MyBottomTabs/>
    </NavigationContainer>
  )
}

export default App