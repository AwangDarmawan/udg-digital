
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';



import KeduaPages from "./pages/KeduaPages";
import PertamaPages from "./pages/PertamaPages";
function App() {
  

  return (
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<PertamaPages />} />
            <Route path="/:nama" element={<PertamaPages/>} />
             <Route path="/undangan" element={<KeduaPages />} />

          
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </>
  )
}

export default App
