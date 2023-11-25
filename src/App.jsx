import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, AuthMainHub } from "./index";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Login />} />
        </Route>

        <Route path="/mainhub" element={<AuthMainHub />} >
          <Route index element={<Login />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
