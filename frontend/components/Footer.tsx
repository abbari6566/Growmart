import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        marginTop: "4rem",
        background: "var(--green-900)",
        color: "var(--green-200)",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "white",
            }}
          >
            GrowMart
          </Link>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--green-300)" }}>
            Your garden, our passion.
          </p>
        </div>
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Quick links</p>
          <ul style={{ listStyle: "none" }}>
            <li><Link href="/" style={{ color: "var(--green-200)" }}>Home</Link></li>
            <li><Link href="/products" style={{ color: "var(--green-200)" }}>Products</Link></li>
          </ul>
        </div>
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Categories</p>
          <p style={{ fontSize: "0.9rem", color: "var(--green-300)" }}>
            Equipment · Flowers · Pots · Soil · Seeds
          </p>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "2rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          fontSize: "0.85rem",
          color: "var(--green-400)",
        }}
      >
        © {new Date().getFullYear()} GrowMart. All rights reserved.
      </div>
    </footer>
  );
}
