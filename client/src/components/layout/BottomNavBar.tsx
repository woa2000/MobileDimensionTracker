import { useLocation } from "wouter";
import { Link } from "wouter";
import { FaHouse, FaListCheck, FaComments, FaUser } from "react-icons/fa6";

export default function BottomNavBar() {
  const [location] = useLocation();

  const navItems = [
    { path: "/home", icon: FaHome, label: "Início" },
    { path: "/tasks", icon: FaListCheck, label: "Tarefas" },
    { path: "/chat", icon: FaComments, label: "Chat" },
    { path: "/profile", icon: FaUser, label: "Perfil" },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location === item.path;
        
        return (
          <Link key={item.path} href={item.path}>
            <div className={`nav-item ${isActive ? "active" : ""}`}>
              <Icon className="text-lg" />
              <span className="text-xs">{item.label}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
