import Container from "../common/Container";
import { Link } from "react-router-dom";

import gros from "../../assets/products/gros.png";

export default function Hero() {
  const products = [
    gros,
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">

          <div>
            <h1 className="text-4xl font-bold md:text-6xl">
              Fresh groceries delivered to your doorstep
            </h1>

            <p className="mt-6 text-gray-600">
              Shop quality food products, household essentials,
              and everyday needs from Goodies Supermarket.
            </p>

            <Link
  to="/shop"
  className="mt-8 inline-block rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition"
>
  Shop Now
</Link>
          </div>


          <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-100 p-6">

            {products.map((gros, index) => (
              <img
                key={index}
                src={gros}
                alt="Grocery product"
                className="h-60 w-full rounded-lg object-cover"
              />
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}