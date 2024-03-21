import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Navigation } from './presentation/navigation/StackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App