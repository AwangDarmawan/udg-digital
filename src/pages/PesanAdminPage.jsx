import PesanAdmin from "../components/Admin/PesanAdmin"
import NavbarAdmin from "../components/Navbar/NavbarAdmin"


function PesanAdminPage() {
  return (
    <>
    <NavbarAdmin />
       <div className="max-w-6xl mx-auto p-4">
        <PesanAdmin />
      </div>
      
    </>
  )
}

export default PesanAdminPage
