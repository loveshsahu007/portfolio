import './App.css'
import Homepage from './Pages/HomePage/Homepage'
import { DarkModeProvider } from './DarkMode/darkmode';
function App() {


  return (
<>
<DarkModeProvider>
<Homepage/>
</DarkModeProvider>

</>
  )
}

export default App
