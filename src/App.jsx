
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import PertamaPages from "./pages/PertamaPages";
import 'react-toastify/dist/ReactToastify.css';
// import KeduaPages from "./pages/KeduaPages";
import Pertama from "./components/Pertama";
// import HeroWedding from "./components/HeroWedding";
import KeduaPages from "./pages/KeduaPages";
// import PertamaPages from "./pages/PertamaPages";
function App() {
  

  return (
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Pertama />} />
            <Route path="/:nama" element={<Pertama/>} />
             <Route path="/undangan" element={<KeduaPages />} />

          
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </>
  )
}

export default App
