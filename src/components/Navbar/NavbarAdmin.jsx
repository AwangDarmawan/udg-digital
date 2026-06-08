import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavbarAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "Pesan",
      href: "/admin/pesan",
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold text-red-600">
            Admin Wedding
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                className="
                  px-4
                  py-2
                  rounded-lg
                  text-white
                  hover:bg-red-600
                  hover:text-white
                  transition
                "
              >
                {menu.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isOpen
                ? "max-h-40 pb-4"
                : "max-h-0"
            }
          `}
        >
          <div className="flex flex-col gap-2">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                className="
                  px-4
                  py-2
                  rounded-lg
                  text-white
                  hover:bg-red-700
                 bg-red-600
                  transition
                "
                onClick={() => setIsOpen(false)}
              >
                {menu.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;