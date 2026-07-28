import Container from "../components/common/Container";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";

export default function Checkout() {
  return (
    <section className="py-16">
      <Container>
        <div>
          <h1 className="text-4xl font-bold">
            Checkout
          </h1>

          <p className="mt-2 text-gray-600">
            Complete your order by providing your details.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <CheckoutForm />

          <OrderSummary />
        </div>
      </Container>
    </section>
  );
}