import { ThemeProvider, Button } from "@material-tailwind/react";
function App() {

  return (
    <ThemeProvider>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button>Button</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
