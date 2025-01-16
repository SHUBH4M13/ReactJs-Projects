import Box from "./Components/Box";
import Header from "./Components/Header";
import GetQuotes from './Components/InfoBox'

function App() {
  return (
    <div className=" min-h-screen w-full flex justify-center items-center">
      <Box>
        <Header/>
        <GetQuotes/>
      </Box>
    </div>

  )
}

export default App;
