import Link from "next/link";
import type { Product } from "@/lib/api";

export function ProductsList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
        No products found. Try another category or search.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {products.map((p) => (
        <Link
          key={p.id}
          href={`/products/${p.slug}`}
          style={{
            background: "white",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(22, 101, 52, 0.08)",
            border: "1px solid var(--green-100)",
            display: "block",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          <div
            style={{
              height: 160,
              background: "linear-gradient(145deg, var(--green-100) 0%, var(--green-200) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
            }}
          >
            🌿
          </div>
          <div style={{ padding: "1.25rem" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--green-900)",
                marginBottom: "0.35rem",
              }}
            >
              {p.name}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--green-700)",
              }}
            >
              £{p.price.toFixed(2)}
            </p>
            {p.in_stock > 0 && (
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                In stock: {p.in_stock}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
