import Container from "../common/Container";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  return (
    <section className="py-16">

      <Container>

        <h2 className="text-3xl font-bold">
          Featured Products
        </h2>


        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {products.map((product)=>(

            <div
              key={product.id}
              className="rounded-lg border p-6"
            >

              <div className="mb-4 h-40 bg-gray-100">
              </div>


              <h3 className="font-semibold">
                {product.name}
              </h3>


              <p className="mt-2 text-green-600">
                ${product.price}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}