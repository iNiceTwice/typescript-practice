import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"

function App():JSX.Element {  
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
