"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  { href: "/payment", label: "Payment" },
  { href: "/login", label: "Login" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="brand">ShopBug</div>
      <nav className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
