import { useState } from 'react'
import { HomeScreen } from './screens/home/home_screen'

function App() {
  const [count, setCount] = useState(0)

  return <HomeScreen/>
}

export default App
