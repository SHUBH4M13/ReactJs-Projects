import Header from "./components/Header";
import Box from "./components/Box";
import Tasks from "./components/Tasks";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen w-full mt-[-20px]">
        <Box>
          <div className="flex flex-col justify-between h-full w-full">
            {/* Tasks Section */}
            <div className="flex-grow flex flex-col">
              <div className=" flex flex-col justify-evenly mt-4 gap-8">
              <Tasks work="sleep" />
              <Tasks work="Code"/>
              <Tasks work="Couputer Network"/>
              </div>
            </div>

            {/* Button Section */}
            <div className="mt-4">
              <Button />
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default App;
