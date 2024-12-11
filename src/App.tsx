import { BrowserRouter } from "react-router-dom";
import { Router } from "@/routes";
import { MainContextProvider } from "@/contexts";

function App() {
  return (
    <BrowserRouter>
      <MainContextProvider>
        <Router />
      </MainContextProvider>
    </BrowserRouter>
  )
}

export default App
