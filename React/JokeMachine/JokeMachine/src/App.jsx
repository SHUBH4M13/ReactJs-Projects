import Box from "./Components/box"
import Heading from "./Components/Header"
import JokeContainer from './Components/JokeContainer'

function App() {

  return (
    <>
      <div className=" min-h-screen w-full flex justify-center items-center">
        <Box>
          <Heading/>
          <JokeContainer/>
        </Box>
      </div>
    </>
  )
}

export default App
