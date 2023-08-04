import Routes from "./routes/routes";
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (<ThemeProvider> <Routes /> </ThemeProvider>)
}

export default App
