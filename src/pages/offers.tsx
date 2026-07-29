import { Link } from "react-router-dom";
import { Gift } from "lucide-react";
import Container from "../components/common/Container";

export default function Offers() {
  return (
    <section className="flex min-h-[80vh] items-center bg-gradient-to-br from-green-50 to-white">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border bg-white p-12 text-center shadow-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <Gift className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="mt-8 text-4xl font-bold text-gray-900">
            Exciting Offers Are Coming Soon!
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We're preparing amazing discounts, weekly deals, bundle offers,
            and exclusive promotions just for you.
          </p>

          <p className="mt-3 text-gray-500">
            Stay tuned—your next shopping trip will be even more rewarding.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Back Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}