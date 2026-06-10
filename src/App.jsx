
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';



import KeduaPages from "./pages/KeduaPages";
import PertamaPages from "./pages/PertamaPages";
import IntroVideo from "./components/IntroVd/IntroVideo";
import Adminpage from "./pages/AdminPage";
import PesanAdminPage from "./pages/PesanAdminPage";
function App() {
  

  return (
    
    <>
       <BrowserRouter>
        <Routes>

           {/* Admin */}
        <Route path="/" element={<Adminpage/>} />
           <Route path="/admin/pesan" element={<PesanAdminPage/>} />
          
          <Route path="/" element={<PertamaPages />} />
            <Route path="/:nama" element={<PertamaPages/>} />
            <Route path="/intro" element={<IntroVideo />} />
             <Route path="/undangan" element={<KeduaPages />} />

          
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </>
  )
}

export default App
