"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        background: "linear-gradient(135deg, var(--green-800) 0%, var(--green-900) 100%)",
        color: "var(--green-100)",
        boxShadow: "0 4px 20px rgba(5, 46, 22, 0.2)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          GrowMart
        </Link>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontWeight: 500,
                padding: "0.4rem 0.6rem",
                borderRadius: 6,
                background: pathname === href ? "rgba(255,255,255,0.15)" : "transparent",
                color: "var(--green-100)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
