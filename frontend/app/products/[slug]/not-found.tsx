import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "4rem auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--green-900)" }}>
        Product not found
      </h1>
      <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
        This product may have been removed or the link is incorrect.
      </p>
      <Link
        href="/products"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.65rem 1.5rem",
          background: "var(--green-600)",
          color: "white",
          fontWeight: 500,
          borderRadius: 8,
        }}
      >
        Browse products
      </Link>
    </div>
  );
}
