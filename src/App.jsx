import Routes from "./routes/routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider>
      <DndProvider backend={HTML5Backend}>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </DndProvider>
    </ThemeProvider>)
}

export default App
