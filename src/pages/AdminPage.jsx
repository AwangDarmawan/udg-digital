import Admin from "../components/Admin/Admin"
import NavbarAdmin from "../components/Navbar/NavbarAdmin"


function Adminpage() {
  return (
    <>
    <NavbarAdmin />
       <div className="max-w-6xl mx-auto p-4">
        <Admin />
      </div>
      
    </>
  )
}

export default Adminpage
