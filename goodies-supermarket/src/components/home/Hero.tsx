import Container from "../common/Container";

export default function Hero() {
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

            <button className="mt-8 rounded bg-green-600 px-6 py-3 text-white">
              Shop Now
            </button>

          </div>


          <div className="rounded-lg bg-gray-100 p-20">
            Image Placeholder
          </div>

        </div>

      </Container>
    </section>
  );
}