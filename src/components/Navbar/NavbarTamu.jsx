import {
   Users,
  Heart,
  BookOpen,
  CalendarDays,
  Image,
  Mail,
  Gift,
  Home,
} from "lucide-react";

function NavbarTamu() {
  const menus = [
    {
      label: "Home",
      href: "#home",
      icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    
    {
      label: "Couple",
      href: "#couple",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      label: "Story",
      href: "#story",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      label: "Time",
      href: "#time",
      icon: <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    
    {
      label: "Gallery",
      href: "#gallery",
      icon: <Image className="w-5 h-5 sm:w-6 sm:h-6"/>,
    },
    {
      label: "RSVP",
      href: "#rsvp",
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      label: "Gift",
      href: "#gift",
      icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    
    {
      label: "Family",
      href: "#family",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <div className="w-full px-2 py-8  bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-4 gap-2">
          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              className="
                flex 
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-red-600
                text-white
                p-2
                transition-all
                duration-300
                hover:bg-red-700
                hover:scale-105
                shadow-lg
              "
            >
              {menu.icon}

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  font-medium
                  font-netflix
                "
              >
                {menu.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarTamu;