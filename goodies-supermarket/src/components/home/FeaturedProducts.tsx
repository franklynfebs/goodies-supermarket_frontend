import Container from "../common/Container";
import ProductGrid from "../shop/ProductGrid";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="py-16">

      <Container>

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

        </div>


        <div className="mt-8">

          <ProductGrid products={featuredProducts} />

        </div>

      </Container>

    </section>
  );
}