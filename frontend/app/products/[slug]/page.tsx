import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchProductBySlug } from "@/lib/api";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let product;
  try {
    product = await fetchProductBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "2rem 1.5rem",
      }}
    >
      <Link
        href="/products"
        style={{
          display: "inline-block",
          marginBottom: "1.5rem",
          color: "var(--green-700)",
          fontWeight: 500,
        }}
      >
        ← Back to products
      </Link>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          alignItems: "start",
          background: "white",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(22, 101, 52, 0.1)",
          border: "1px solid var(--green-100)",
        }}
      >
        <div
          style={{
            aspectRatio: "1",
            background: "linear-gradient(145deg, var(--green-100) 0%, var(--green-200) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6rem",
          }}
        >
          🌱
        </div>
        <div style={{ padding: "2rem 2rem 2rem 0" }}>
          {product.category && (
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--green-600)",
                fontWeight: 500,
                marginBottom: "0.5rem",
              }}
            >
              {product.category.name}
            </p>
          )}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.75rem",
              color: "var(--green-900)",
              marginBottom: "0.75rem",
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--green-700)",
              marginBottom: "1rem",
            }}
          >
            £{product.price.toFixed(2)}
          </p>
          {product.description && (
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              {product.description}
            </p>
          )}
          {product.in_stock > 0 ? (
            <p style={{ fontSize: "0.9rem", color: "var(--green-600)" }}>
              In stock: {product.in_stock}
            </p>
          ) : (
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Out of stock</p>
          )}
        </div>
      </div>
    </div>
  );
}
