import Routes from "./routes/routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (<ThemeProvider>
    <DndProvider backend={HTML5Backend}>
      <Routes />
    </DndProvider>
  </ThemeProvider>)
}

export default App
