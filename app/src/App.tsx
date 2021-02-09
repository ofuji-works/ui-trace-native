import React from 'react'
import { StatusBar } from 'react-native'
import AppRouter from './Router'

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppRouter />
    </>
  )
}

export default App
