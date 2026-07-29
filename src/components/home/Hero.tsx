import Container from "../common/Container";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold md:text-6xl">
              Fresh groceries delivered to your doorstep
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Shop quality food products, household essentials,
              and everyday needs from Goodies Supermarket.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block rounded-lg bg-green-600 px-8 py-4 font-medium text-white transition hover:bg-green-700"
            >
              Shop Now
            </Link>
          </div>

          <div>
            <img
              src="/products/gros.png"
              alt="Fresh groceries"
              className="h-[500px] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}