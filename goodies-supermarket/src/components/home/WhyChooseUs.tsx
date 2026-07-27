import Container from "../common/Container";

const reasons = [
  {
    title: "Quality Products",
    description:
      "We provide fresh and reliable products for your everyday needs.",
  },
  {
    title: "Affordable Prices",
    description:
      "Get competitive prices without compromising on quality.",
  },
  {
    title: "Convenient Shopping",
    description:
      "Shop easily and find everything you need in one place.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">

      <Container>

        <h2 className="text-center text-3xl font-bold">
          Why Choose Goodies?
        </h2>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {reasons.map((reason) => (

            <div
              key={reason.title}
              className="rounded-xl border p-6"
            >

              <h3 className="text-xl font-semibold">
                {reason.title}
              </h3>


              <p className="mt-3 text-gray-600">
                {reason.description}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}