import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./components/Index"
import Realm from "./components/Realm"

function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/realm" element={<Realm />} />
          </Routes>
          
      </BrowserRouter>
    )
}

export default App
