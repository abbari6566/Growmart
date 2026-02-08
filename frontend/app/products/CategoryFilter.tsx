"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Category } from "@/lib/api";

export function CategoryFilter({
  categories,
  currentCategoryId,
  search,
}: {
  categories: Category[];
  currentCategoryId?: number;
  search?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setCategory(catId: number | null) {
    const next = new URLSearchParams(searchParams.toString());
    if (catId == null) next.delete("category");
    else next.set("category", String(catId));
    if (search) next.set("search", search);
    router.push(`/products?${next.toString()}`);
  }

  function setSearch(value: string) {
    const next = new URLSearchParams(searchParams.toString());
    if (value) next.set("search", value);
    else next.delete("search");
    router.push(`/products?${next.toString()}`);
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        marginBottom: "2rem",
        alignItems: "center",
      }}
    >
      <span style={{ fontWeight: 500, color: "var(--text-muted)" }}>Category:</span>
      <button
        onClick={() => setCategory(null)}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: 8,
          border: "1px solid var(--green-300)",
          background: currentCategoryId == null ? "var(--green-600)" : "white",
          color: currentCategoryId == null ? "white" : "var(--green-800)",
          fontWeight: 500,
        }}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => setCategory(c.id)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: 8,
            border: "1px solid var(--green-300)",
            background: currentCategoryId === c.id ? "var(--green-600)" : "white",
            color: currentCategoryId === c.id ? "white" : "var(--green-800)",
            fontWeight: 500,
          }}
        >
          {c.name}
        </button>
      ))}
      <form
        style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.5rem" }}
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const input = form.querySelector('input[name="search"]') as HTMLInputElement;
          setSearch(input?.value?.trim() ?? "");
        }}
      >
        <label htmlFor="search" style={{ fontWeight: 500, color: "var(--text-muted)" }}>
          Search:
        </label>
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Search products..."
          defaultValue={search}
          style={{
            padding: "0.5rem 0.75rem",
            borderRadius: 8,
            border: "1px solid var(--green-300)",
            minWidth: 200,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: 8,
            border: "none",
            background: "var(--green-600)",
            color: "white",
            fontWeight: 500,
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
