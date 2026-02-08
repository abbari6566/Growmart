import { Suspense } from "react";
import Link from "next/link";
import { fetchCategories, fetchProducts } from "@/lib/api";
import { ProductsList } from "./ProductsList";
import { CategoryFilter } from "./CategoryFilter";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const params = await searchParams;
  const categoryId = params.category ? parseInt(params.category, 10) : undefined;
  const search = params.search ?? undefined;

  const [categories, products] = await Promise.all([
    fetchCategories(),
    fetchProducts({ category_id: categoryId, search, limit: 50 }),
  ]);

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "2rem 1.5rem",
      }}
    >
      <h1
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "2rem",
          color: "var(--green-900)",
          marginBottom: "1.5rem",
        }}
      >
        Products
      </h1>
      <CategoryFilter categories={categories} currentCategoryId={categoryId} search={search} />
      <Suspense fallback={<p style={{ color: "var(--text-muted)" }}>Loading products…</p>}>
        <ProductsList products={products} />
      </Suspense>
    </div>
  );
}
