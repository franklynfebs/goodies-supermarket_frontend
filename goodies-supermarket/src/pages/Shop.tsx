import { useState } from "react";

import Container from "../components/common/Container";
import ProductGrid from "../components/shop/ProductGrid";
import ProductSearch from "../components/shop/ProductSearch";
import ProductFilter from "../components/shop/ProductFilter";
import ProductSort from "../components/shop/ProductSort";

import { products } from "../data/products";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState("default");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesPrice = product.price <= maxPrice;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;

      case "price-high":
        return b.price - a.price;

      case "name-a":
        return a.name.localeCompare(b.name);

      case "name-z":
        return b.name.localeCompare(a.name);

      default:
        return 0;
    }
  });

  return (
    <section className="py-16">
      <Container>
        <div>
          <h1 className="text-4xl font-bold">
            Shop
          </h1>

          <p className="mt-2 text-gray-600">
            Browse our latest supermarket products
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:max-w-xl">
            <ProductSearch
              value={search}
              onChange={setSearch}
            />
          </div>

          <ProductSort
            sort={sort}
            setSort={setSort}
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductFilter
              category={category}
              setCategory={setCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>

          <div>
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                Showing {sortedProducts.length} product
                {sortedProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {sortedProducts.length > 0 ? (
              <ProductGrid products={sortedProducts} />
            ) : (
              <p className="text-gray-600">
                No products found.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}