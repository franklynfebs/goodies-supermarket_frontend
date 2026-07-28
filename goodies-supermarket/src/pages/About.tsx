import Container from "../components/common/Container";

export default function About() {
  return (
    <section className="py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h1 className="text-4xl font-bold md:text-6xl">
            About Goodies Supermarket
          </h1>

          <p className="mt-6 text-gray-600">
            Goodies Supermarket is your trusted destination for fresh groceries,
            quality food products, household essentials, and everyday needs.
            We are committed to bringing convenience, affordability, and quality
            products closer to every home.
          </p>

        </div>


        <div className="mt-20 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-3xl font-bold">
              Our Story
            </h2>

            <p className="mt-4 text-gray-600">
              We started with a simple mission: to make shopping easier by
              providing customers with fresh, reliable, and affordable products
              in one convenient place.
            </p>

            <p className="mt-4 text-gray-600">
              From fresh fruits and groceries to beverages, snacks, and household
              essentials, Goodies Supermarket continues to serve families with
              products they can trust.
            </p>
          </div>


          <div className="rounded-lg bg-green-100 p-10">
            <h2 className="text-3xl font-bold">
              Why Choose Us?
            </h2>

            <ul className="mt-6 space-y-4 text-gray-700">

              <li>
                ✓ Fresh and quality products
              </li>

              <li>
                ✓ Affordable prices
              </li>

              <li>
                ✓ Convenient shopping experience
              </li>

              <li>
                ✓ Customer satisfaction focused
              </li>

            </ul>

          </div>

        </div>


        <div className="mt-20 text-center">

          <h2 className="text-3xl font-bold">
            Quality You Can Trust
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            At Goodies Supermarket, we believe every customer deserves access
            to fresh products and excellent service.
          </p>

        </div>

      </Container>
    </section>
  );
}