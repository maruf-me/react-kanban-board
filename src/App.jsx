import Home from "./pages/Home";
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (<ThemeProvider> <Home /> </ThemeProvider>)
}

export default App
