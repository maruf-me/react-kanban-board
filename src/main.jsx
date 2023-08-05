import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { StoreProvider } from './services/storeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <BrowserRouter> <App /> </BrowserRouter>
  </StoreProvider>

)
