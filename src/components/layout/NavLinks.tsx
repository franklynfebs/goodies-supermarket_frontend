import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-green-600"
              : "text-gray-700 transition hover:text-green-600"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
}