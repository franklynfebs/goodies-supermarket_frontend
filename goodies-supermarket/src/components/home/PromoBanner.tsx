import Container from "../common/Container";

export default function PromoBanner() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-2xl bg-green-600 px-6 py-12 text-white md:px-12">

          <div className="max-w-2xl">

            <h2 className="text-3xl font-bold md:text-4xl">
              Fresh Deals Every Week
            </h2>

            <p className="mt-4 text-green-50">
              Enjoy great prices on groceries, household essentials,
              and everyday products from Goodies Supermarket.
            </p>

            <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-green-600 transition hover:bg-gray-100">
              View Offers
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}