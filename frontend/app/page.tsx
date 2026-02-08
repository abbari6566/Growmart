import Link from "next/link";
import { fetchCategories, fetchProducts } from "@/lib/api";

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    fetchCategories(),
    fetchProducts({ limit: 6 }),
  ]);

  return (
    <>
      <section
        style={{
          background: "linear-gradient(160deg, var(--green-700) 0%, var(--green-900) 60%)",
          color: "white",
          padding: "4rem 1.5rem 5rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            maxWidth: 700,
            margin: "0 auto 1rem",
            lineHeight: 1.2,
          }}
        >
          Everything you need to grow
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            opacity: 0.95,
            maxWidth: 500,
            margin: "0 auto 2rem",
          }}
        >
          Gardening equipment, flowers, pots, seeds and more. Quality products for your garden.
        </p>
        <Link
          href="/products"
          style={{
            display: "inline-block",
            padding: "0.85rem 1.75rem",
            background: "white",
            color: "var(--green-800)",
            fontWeight: 600,
            borderRadius: 8,
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
          }}
        >
          Shop now
        </Link>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "-2rem auto 0",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "1rem",
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              style={{
                padding: "1.25rem",
                background: "white",
                borderRadius: 12,
                boxShadow: "0 4px 16px rgba(22, 101, 52, 0.08)",
                border: "1px solid var(--green-100)",
                textAlign: "center",
                color: "var(--green-800)",
                fontWeight: 500,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "4rem auto",
          padding: "0 1.5rem",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.75rem",
            color: "var(--green-900)",
            marginBottom: "1.5rem",
          }}
        >
          Featured products
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
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
                  height: 180,
                  background: "linear-gradient(145deg, var(--green-100) 0%, var(--green-200) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}
              >
                🌱
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--green-900)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--green-700)",
                  }}
                >
                  £{p.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link
            href="/products"
            style={{
              display: "inline-block",
              padding: "0.65rem 1.5rem",
              background: "var(--green-600)",
              color: "white",
              fontWeight: 500,
              borderRadius: 8,
            }}
          >
            View all products
          </Link>
        </div>
      </section>
    </>
  );
}
