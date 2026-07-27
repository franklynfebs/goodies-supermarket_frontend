import Container from "../common/Container";

export default function Newsletter() {
  return (
    <section className="border-t py-16">

      <Container>

        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-3xl font-bold">
            Stay Updated
          </h2>


          <p className="mt-4 text-gray-600">
            Subscribe to receive new product updates,
            special offers, and supermarket deals.
          </p>


          <form className="mt-8 flex flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
            />


            <button
              type="submit"
              className="rounded-lg bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
            >
              Subscribe
            </button>

          </form>

        </div>

      </Container>

    </section>
  );
}