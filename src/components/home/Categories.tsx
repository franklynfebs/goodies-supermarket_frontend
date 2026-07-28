import Container from "../common/Container";
import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="py-16">

      <Container>

        <h2 className="text-3xl font-bold">
          Shop Categories
        </h2>


        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {categories.map((category) => (

            <div
              key={category.name}
              className="rounded-lg border p-6 text-center"
            >

              <h3 className="font-semibold">
                {category.name}
              </h3>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}