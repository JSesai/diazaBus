import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, AuthMainHub, MainHub } from "./index";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Login />} />
          <Route path="mainhub" element={<MainHub />} />
        </Route>

        {/* <Route path="/mainhub" element={<AuthMainHub />} >
          <Route  element={<MainHub />} />
        </Route> */}

      </Routes>

    </BrowserRouter>
  )
}

export default App
